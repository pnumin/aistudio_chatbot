import { GoogleGenAI } from "@google/genai";
import { GroundingChunk } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = "gemini-2.5-flash";

const SYSTEM_INSTRUCTION = `
당신은 대한민국 해군교육사령부(Republic of Korea Navy Education and Training Command) 웹사이트(https://www.edunavy.mil.kr:10003/)의 공식 챗봇입니다.
사용자의 질문에 대해 항상 제공된 Google Search 도구를 사용하여 해당 웹사이트의 최신 정보를 검색한 후 답변하십시오.
검색할 때는 'site:edunavy.mil.kr' 또는 '해군교육사령부'와 같은 키워드를 적극적으로 활용하여 해당 출처의 정보를 우선적으로 찾으십시오.
정보가 해당 사이트에서 발견되지 않는 경우, 그 사실을 명확히 하고 일반적인 해군 관련 지식이나 공신력 있는 다른 군 관련 출처를 참고할 수 있다고 언급하십시오.
답변은 친절하고 전문적인 '해요'체나 '하십시오'체(군대 말투와 부드러운 말투의 조화)를 사용하십시오.
항상 한국어로 답변하십시오.
`;

export interface ChatResponse {
  text: string;
  groundingChunks?: GroundingChunk[];
}

/**
 * Sends a message to the Gemini model with search grounding enabled.
 * Uses a single-turn generation approach to ensure grounding is fresh for each query,
 * or chat mode if needed. Here we use chat mode for context but emphasize search.
 */
export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<ChatResponse> => {
  try {
    // We construct a fresh chat session each time or maintain one. 
    // To simplify and ensure robust grounding config, we'll re-create the chat object 
    // but pass the history.
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }], // Enable Google Search Grounding
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    
    // Extract text
    const responseText = result.text || "죄송합니다. 답변을 생성하지 못했습니다.";

    // Extract grounding chunks if available
    // Note: The SDK structure for grounding chunks is inside candidate -> groundingMetadata
    const groundingChunks = result.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] | undefined;

    return {
      text: responseText,
      groundingChunks
    };

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
