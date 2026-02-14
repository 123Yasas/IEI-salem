
import React from 'react';
import { Calendar, ChevronRight, Newspaper, ArrowUpRight } from 'lucide-react';

const events = [
  {
    title: "Workshop on Artificial Intelligence in Smart Grids",
    date: "24 Nov 2025",
    time: "10:00 AM",
    type: "Technical Workshop"
  },
  {
    title: "Industrial Visit: Salem Steel Plant Modernization",
    date: "12 Dec 2025",
    time: "09:30 AM",
    type: "Site Visit"
  },
  {
    title: "Technical Seminar: sustainable Infrastructure Development",
    date: "05 Jan 2026",
    time: "02:00 PM",
    type: "Webinar"
  }
];

const news = [
  "New Executive Committee for 2025-27 Session assumes charge.",
  "Salem Local Centre wins Best Centre Award (Category B) at National HQ.",
  "IEI Salem initiates Digital Literacy program for rural engineering students.",
  "MOU signed with local industries for student internships."
];

export const NewsEvents: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Latest News Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 border-b-2 border-[#002b5c] pb-2">
              <Newspaper className="text-[#002b5c]" size={24} />
              <h2 className="text-xl font-bold text-[#002b5c] uppercase tracking-tight">Latest News</h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                {news.map((item, idx) => (
                  <div key={idx} className="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                      <p className="text-sm text-gray-700 leading-snug group-hover:text-[#002b5c] font-medium transition-colors">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 text-sm font-bold text-[#002b5c] hover:bg-[#002b5c] hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-widest border-t border-gray-100">
                View All News <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Upcoming Events Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6 border-b-2 border-yellow-500 pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="text-[#002b5c]" size={24} />
                <h2 className="text-xl font-bold text-[#002b5c] uppercase tracking-tight">Upcoming Events</h2>
              </div>
              <a href="#" className="text-xs font-bold text-[#002b5c] hover:underline uppercase tracking-widest">Full Calendar</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((event, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-[#002b5c]/5 text-[#002b5c] text-[10px] font-black uppercase px-2 py-1 rounded">
                        {event.type}
                      </span>
                      <div className="bg-yellow-500/10 text-[#002b5c] p-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <h3 className="font-bold text-[#002b5c] text-lg mb-4 line-clamp-2 group-hover:underline">
                      {event.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-bold uppercase tracking-tighter mt-4 border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-yellow-600" /> {event.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
              
              {/* Event CTA Card */}
              <div className="bg-[#002b5c] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center text-white space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar size={24} className="text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg">Organize an Event?</h3>
                <p className="text-sm text-blue-200">Collaborate with IEI Salem for technical workshops.</p>
                <button className="bg-white text-[#002b5c] px-6 py-2 rounded font-black text-xs uppercase hover:bg-yellow-500 transition-colors">
                  Contact Committee
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
