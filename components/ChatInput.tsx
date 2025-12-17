import React, { useState, useRef, useEffect } from 'react';
import { SendIcon } from '../constants';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputText, setInputText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;
    onSendMessage(inputText);
    setInputText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  return (
    <div className="border-t border-slate-200 bg-white/90 backdrop-blur-sm p-4 sticky bottom-0 z-10 safe-area-bottom">
      <div className="max-w-4xl mx-auto relative">
        <form onSubmit={handleSubmit} className="relative flex items-end gap-2 bg-slate-50 border border-slate-300 rounded-2xl p-2 shadow-inner focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputText}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "답변을 생성하는 중입니다..." : "해군교육사령부에 대해 무엇이든 물어보세요..."}
            className="w-full bg-transparent border-none focus:ring-0 resize-none py-3 px-3 text-slate-700 placeholder:text-slate-400 max-h-[120px] overflow-y-auto"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className={`p-3 rounded-xl flex-shrink-0 transition-all duration-200 ${
              !inputText.trim() || isLoading
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 active:scale-95'
            }`}
          >
            <SendIcon />
          </button>
        </form>
        <div className="text-center mt-2">
            <p className="text-[10px] text-slate-400">
                Gemini AI를 기반으로 답변하며, <span className="font-semibold text-slate-500">https://www.edunavy.mil.kr:10003/</span> 의 내용을 검색합니다.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
