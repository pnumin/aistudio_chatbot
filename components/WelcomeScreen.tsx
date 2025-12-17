import React from 'react';

interface WelcomeScreenProps {
  onExampleClick: (text: string) => void;
}

const EXAMPLES = [
  "해군병 지원 자격이 어떻게 되나요?",
  "입영 시 준비물 알려줘",
  "훈련소 위치와 가는 방법은?",
  "면회 신청 절차가 궁금해요"
];

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onExampleClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 py-10 opacity-0 animate-fadeIn fill-mode-forwards" style={{animationDuration: '0.8s'}}>
      <div className="bg-indigo-50 p-6 rounded-full mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">무엇을 도와드릴까요?</h2>
      <p className="text-slate-500 max-w-md mb-8">
        해군교육사령부 홈페이지의 정보를 바탕으로 궁금한 점을 신속하게 답변해 드립니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
        {EXAMPLES.map((example, index) => (
          <button
            key={index}
            onClick={() => onExampleClick(example)}
            className="text-left px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 hover:shadow-md hover:bg-indigo-50/50 transition-all text-sm text-slate-700"
          >
            "{example}"
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
