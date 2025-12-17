import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message, Role, GroundingChunk } from '../types';
import { BotIcon, UserIcon, LinkIcon } from '../constants';

interface MessageItemProps {
  message: Message;
}

const SourceCitation: React.FC<{ chunk: GroundingChunk }> = ({ chunk }) => {
  if (!chunk.web?.uri || !chunk.web?.title) return null;

  return (
    <a
      href={chunk.web.uri}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-1 bg-white border border-slate-200 rounded px-2 py-1 text-xs text-blue-600 hover:text-blue-800 hover:border-blue-300 transition-colors mb-1 mr-1 shadow-sm"
    >
      <LinkIcon />
      <span className="truncate max-w-[150px]">{chunk.web.title}</span>
    </a>
  );
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 group`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] ${isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'} items-start space-x-3`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-white'
        } shadow-sm mt-1`}>
          {isUser ? <UserIcon /> : <BotIcon />}
        </div>

        {/* Bubble */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div className={`px-5 py-3 rounded-2xl shadow-sm relative text-sm md:text-base leading-relaxed break-words ${
            isUser 
              ? 'bg-indigo-600 text-white rounded-tr-none whitespace-pre-wrap' 
              : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
          }`}>
            {isUser ? (
              message.text
            ) : (
              <div className="markdown-body">
                <ReactMarkdown
                    components={{
                        a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />
                    }}
                >
                    {message.text}
                </ReactMarkdown>
              </div>
            )}
            
            {/* Error Indicator */}
            {message.isError && (
              <div className="mt-2 text-red-200 text-xs flex items-center">
                <span>⚠️ 메시지 전송 중 오류가 발생했습니다.</span>
              </div>
            )}
          </div>

          {/* Timestamp */}
          <span className="text-[10px] text-slate-400 mt-1 px-1">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>

          {/* Grounding Sources (Only for Model) */}
          {!isUser && message.groundingChunks && message.groundingChunks.length > 0 && (
            <div className="mt-3 w-full animate-fadeIn">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">
                출처 (Sources)
              </p>
              <div className="flex flex-wrap">
                {message.groundingChunks.map((chunk, idx) => (
                  <SourceCitation key={idx} chunk={chunk} />
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MessageItem;