
import React from 'react';
import { Database, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500 p-1.5 rounded-lg">
            <Database className="w-5 h-5 text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tighter text-white leading-none">NUMBER MATRIX <span className="text-emerald-400">PRO</span></span>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-0.5">Intelligence System</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-[10px] font-bold">
            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            System Live
          </div>
          <button className="p-1.5 text-slate-400 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
