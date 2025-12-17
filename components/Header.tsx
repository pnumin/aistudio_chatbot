import React from 'react';
import { APP_NAME, NavyLogo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-20 h-16 flex items-center justify-center px-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <NavyLogo className="h-8 w-8 text-indigo-900" />
        <h1 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">
          {APP_NAME}
        </h1>
      </div>
    </header>
  );
};

export default Header;