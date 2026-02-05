
import React, { useState } from 'react';
import { Menu, X, ChevronDown, LogIn, Search } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Membership', href: '#' },
  { label: 'Academics', href: '#' },
  { label: 'Certification', href: '#' },
  { label: 'Committee Members', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'Activities', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white z-50">
      {/* Top Utility Bar */}
      <div className="bg-gray-100 py-1 border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end gap-6 text-[11px] font-bold text-gray-600 uppercase tracking-wider">
          <a href="#" className="hover:text-[#002b5c]">IEI National</a>
          <a href="#" className="hover:text-[#002b5c]">Student Portal</a>
          <a href="#" className="hover:text-[#002b5c]">Downloads</a>
          <a href="#" className="hover:text-[#002b5c] flex items-center gap-1"><LogIn size={12} /> Member Login</a>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {/* IEI Circular Emblem Logo as provided by the user */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/2/25/The_Institution_of_Engineers_%28India%29_Logo.png" 
              alt="The Institution of Engineers (India) Logo" 
              className="h-24 md:h-28 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://www.ieindia.org/Images/iei-logo.png';
              }}
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold text-[#002b5c] font-serif leading-tight">
                The Institution of Engineers (India)
              </h1>
              <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mt-1">
                Incorporated by Royal Charter 1935
              </p>
              <h2 className="text-[#002b5c] font-black text-xl md:text-3xl tracking-tight mt-1 uppercase">
                Salem Local Centre
              </h2>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right border-r-2 border-gray-200 pr-4">
              <p className="text-[#002b5c] font-bold italic text-sm">"A Century of Service to the Nation"</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase">Engineering Excellence</p>
            </div>
            <img 
              src="https://www.ieindia.org/Images/100yearslogo.png" 
              alt="100 Years Logo" 
              className="h-16 w-auto opacity-80"
              onError={(e) => (e.target as any).style.display = 'none'}
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar - Classic Blue Style */}
      <nav className="bg-[#002b5c] sticky top-0 shadow-md">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            <ul className={`md:flex flex-col md:flex-row w-full md:w-auto ${isOpen ? 'flex absolute top-full left-0 bg-[#002b5c] shadow-2xl z-50' : 'hidden'}`}>
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-white/5 md:border-b-0">
                  <a 
                    href={item.href} 
                    className="flex items-center gap-1 py-4 px-4 text-white text-[12px] font-bold uppercase hover:bg-white/10 transition-colors whitespace-nowrap tracking-wider"
                  >
                    {item.label}
                    {['Membership', 'Events'].includes(item.label) && <ChevronDown size={12} />}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex md:hidden w-full justify-between items-center py-3">
              <span className="text-white font-bold text-sm uppercase">Menu</span>
              <button 
                className="text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden md:flex items-center text-white/60 hover:text-white cursor-pointer px-4">
              <Search size={18} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
