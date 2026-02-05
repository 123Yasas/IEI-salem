
import React from 'react';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: About IEI */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#002b5c] p-4 text-white font-bold text-xl flex items-center gap-2">
              <Award className="text-white/80" />
              About IEI (Salem Local Centre)
            </div>
            <div className="p-6 flex-grow">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Institution of Engineers (India) - Salem Local Centre has been a cornerstone of professional development in the region for decades. Established to bridge the gap between academic theory and industrial practice, the Salem Local Centre serves thousands of engineers across various disciplines.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-white p-3 rounded-md shadow-sm border border-gray-100">
                  <Calendar className="text-[#002b5c]" />
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Established</div>
                    <div className="font-bold text-[#002b5c]">Year 1992</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-md shadow-sm border border-gray-100">
                  <Users className="text-[#002b5c]" />
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Members</div>
                    <div className="font-bold text-[#002b5c]">5000+ Active</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our centre is dedicated to promoting engineering education, upholding professional ethics, and organizing technical seminars, workshops, and student chapter activities that empower the next generation of engineers.
              </p>
              <a 
                href="https://www.ieindia.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#002b5c] text-white px-6 py-3 rounded-md font-bold hover:bg-[#004080] transition-colors"
              >
                Visit IEI Official Website <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Card 2: Building Image */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="bg-gray-100 p-4 text-[#002b5c] font-bold text-xl">
              Our Infrastructure
            </div>
            <div className="relative h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                alt="IEI Salem Building Infrastructure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002b5c]/90 to-transparent p-6">
                <p className="text-white text-lg font-bold">Salem Local Centre Headquarters</p>
                <p className="text-gray-200 text-sm">State-of-the-art facilities for technical meetings and research.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
