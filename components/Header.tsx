
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, Sparkles } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Membership', href: '#' },
  { label: 'Academics', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white z-50 sticky top-0 shadow-md">
      {/* Simple Top Branding */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/2/25/The_Institution_of_Engineers_%28India%29_Logo.png" 
            alt="IEI Logo" 
            className="h-12 md:h-16 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://www.ieindia.org/Images/iei-logo.png';
            }}
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold text-[#002b5c] font-serif leading-none">
              The Institution of Engineers (India)
            </h1>
            <p className="text-[#002b5c] font-black text-sm md:text-md uppercase tracking-tight">
              Salem Local Centre
            </p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-[#002b5c] text-white font-bold text-[11px] px-6 py-2.5 uppercase tracking-widest rounded-sm hover:bg-yellow-500 hover:text-[#002b5c] transition-all flex items-center gap-2">
            <Sparkles size={14} /> Join IEI
          </button>
        </div>

        <button 
          className="lg:hidden text-[#002b5c] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Simplified Navigation Bar */}
      <nav className={`${isOpen ? 'block' : 'hidden'} lg:block bg-gray-50 lg:bg-white`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
            {navItems.map((item) => (
              <li key={item.label} className="group">
                <a 
                  href={item.href} 
                  className="flex items-center gap-1 py-3 px-6 text-[#002b5c] text-[12px] font-bold uppercase hover:bg-[#002b5c] hover:text-white transition-all whitespace-nowrap tracking-wider"
                >
                  {item.label}
                  {['Membership', 'Events'].includes(item.label) && <ChevronDown size={12} />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
