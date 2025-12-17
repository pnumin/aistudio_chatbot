import React from 'react';

export const APP_NAME = "해군교육사령부 챗봇";
export const TARGET_SITE = "https://www.edunavy.mil.kr:10003/";

// Navy Logo Component (Anchor Icon)
export const NavyLogo = ({ className }: { className?: string }) => React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: className },
  React.createElement("path", { fillRule: "evenodd", d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.375 12a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z", clipRule: "evenodd" }),
  React.createElement("path", { fillRule: "evenodd", d: "M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12z", clipRule: "evenodd" }),
  React.createElement("path", { d: "M12 4.75a.75.75 0 00-.75.75v5.19L9.12 8.56a.75.75 0 10-1.06 1.06l3.41 3.41a.75.75 0 001.06 0l3.41-3.41a.75.75 0 10-1.06-1.06l-2.13 2.13V5.5a.75.75 0 00-.75-.75z" }),
  // Using a more distinct Anchor-like shape for clarity
  React.createElement("path", { d: "M12 3a1 1 0 011 1v2.2a7.002 7.002 0 015.86 5.86h.39a1 1 0 110 2h-1.06a7.002 7.002 0 01-5.19 5.19v1.06a1 1 0 01-2 0v-1.06A7.002 7.002 0 014.81 14.06H3.75a1 1 0 010-2h.39A7.002 7.002 0 0110 6.2V4a1 1 0 011-1zm0 5.2a5.002 5.002 0 00-4.9 4.9h9.8A5.002 5.002 0 0012 8.2z", fillRule: "evenodd", clipRule: "evenodd" })
);


// Simple SVG Icons
export const SendIcon = () => React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5" },
  React.createElement("path", { d: "M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" })
);

export const BotIcon = () => React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6" },
  React.createElement("path", { fillRule: "evenodd", d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.752 3.752 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z", clipRule: "evenodd" })
);

export const UserIcon = () => React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6" },
  React.createElement("path", { fillRule: "evenodd", d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", clipRule: "evenodd" })
);

export const LinkIcon = () => React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-3 h-3" },
  React.createElement("path", { fillRule: "evenodd", d: "M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.061-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.061 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z", clipRule: "evenodd" })
);

export const LoadingDots = () => React.createElement(
  "div",
  { className: "flex space-x-1" },
  React.createElement("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" }),
  React.createElement("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" }),
  React.createElement("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce" })
);
