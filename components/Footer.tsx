
import React from 'react';
import { Eye, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001b3a] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
             <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Salem Local Centre</h3>
             <p className="text-gray-400 text-sm max-w-sm text-center md:text-left">
               A constituent of The Institution of Engineers (India), the global body of engineers.
             </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#002b5c] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#002b5c] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#002b5c] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#002b5c] transition-colors"><Youtube size={20} /></a>
            </div>
            <div className="flex items-center gap-2 text-sm bg-black/40 px-4 py-2 rounded-full border border-white/10">
              <Eye size={16} className="text-[#002b5c]" />
              <span className="font-bold text-gray-300">Visitor Count:</span>
              <span className="font-mono text-[#002b5c] text-lg bg-white/10 px-2 rounded">04,25,912</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 All Rights Reserved | IEI Salem Local Centre</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
