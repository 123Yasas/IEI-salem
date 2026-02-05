
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { OfficeBearer } from '../types';

const bearers: OfficeBearer[] = [
  {
    name: "Er. K. Ramasamy",
    designation: "Founder Chairman",
    image: "https://i.pravatar.cc/300?img=32"
  },
  {
    name: "Er. S. Loganathan",
    designation: "Chairman",
    image: "https://i.pravatar.cc/300?img=47"
  },
  {
    name: "Dr. M. Venkatesan",
    designation: "Honorary Secretary",
    image: "https://i.pravatar.cc/300?img=53"
  }
];

export const OfficeBearers: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-[#002b5c] mb-12">Office Bearers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bearers.map((bearer, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#002b5c] p-1">
                <img 
                  src={bearer.image} 
                  alt={bearer.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[#002b5c] mb-1">{bearer.name}</h3>
              <p className="text-[#002b5c] font-bold text-sm uppercase tracking-wider mb-4 opacity-80">
                {bearer.designation}
              </p>
              <div className="flex justify-center gap-3">
                <button className="p-2 bg-gray-100 rounded-full text-[#002b5c] hover:bg-[#002b5c] hover:text-white transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 bg-gray-100 rounded-full text-red-700 hover:bg-red-700 hover:text-white transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
