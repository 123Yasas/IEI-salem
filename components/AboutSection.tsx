
import React from 'react';
import { ExternalLink, Calendar, Users, Award, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-yellow-600 font-black text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <ShieldCheck size={16} /> Heritage of Excellence
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002b5c] font-serif leading-tight">
                Empowering the Engineering Community since 1992
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              The Institution of Engineers (India) - Salem Local Centre has been a cornerstone of professional development in the region for decades. Established to bridge the gap between academic theory and industrial practice, we serve thousands of engineers across various disciplines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#002b5c] shadow-sm">
                <div className="bg-[#002b5c] w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4">
                  <Calendar size={20} />
                </div>
                <div className="text-2xl font-black text-[#002b5c]">1992</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Foundation Year</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-yellow-500 shadow-sm">
                <div className="bg-yellow-500 w-10 h-10 rounded-lg flex items-center justify-center text-[#002b5c] mb-4">
                  <Users size={20} />
                </div>
                <div className="text-2xl font-black text-[#002b5c]">5,000+</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Active Members</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.ieindia.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#002b5c] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#001b3a] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                National Portal <ExternalLink size={14} />
              </a>
              <button className="inline-flex items-center gap-2 border-2 border-[#002b5c] text-[#002b5c] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
                Download Charter
              </button>
            </div>
          </div>

          {/* Media side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="IEI Salem Building Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-1px bg-yellow-500"></div>
                  <span className="text-yellow-500 text-xs font-black uppercase tracking-widest">Headquarters</span>
                </div>
                <h4 className="text-white text-2xl font-bold font-serif">Salem Local Centre Complex</h4>
                <p className="text-gray-300 text-sm mt-2 max-w-md">State-of-the-art facilities hosting technical symposiums and academic research for the Salem engineering corridor.</p>
              </div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/20 rounded-2xl z-0 rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#002b5c]/10 rounded-full z-0 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
