
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

/**
 * Slide configuration with local images and concise text.
 */
const slides = [
  {
    title: "31st Annual General Meeting",
    subtitle: "Salem Local Centre",
    description: "Milestone event for engineering leadership and strategic regional planning.",
    image: "./hero1.jpg" 
  },
  {
    title: "Inaugural Session & Prayer",
    subtitle: "Engineering Excellence",
    description: "Traditional invocation marking the commencement of our annual session.",
    image: "./hero2.jpg"
  },
  {
    title: "Felicitation of Members",
    subtitle: "Recognizing Achievement",
    description: "Honoring distinguished members for their lifetime contributions.",
    image: "./hero3.jpg"
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovering]);

  return (
    <section 
      className="relative w-full h-[450px] md:h-[600px] overflow-hidden group bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              currentIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
            }`}
          >
            {/* Background Image with Professional Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001b3a]/90 via-[#001b3a]/40 to-transparent z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://api.a0.dev/assets/image?text=Engineers%20Event%20${index + 1}&aspect=16:9`;
              }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className={`max-w-2xl transition-all duration-700 delay-200 ${currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                  
                  {/* Recent Highlight Badge */}
                  <div className="inline-block bg-yellow-500 text-[#002b5c] text-[10px] font-black px-3 py-1 mb-6 tracking-widest uppercase rounded-sm">
                    Recent Highlight
                  </div>
                  
                  {/* Titles - Reduced size as requested */}
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase leading-none drop-shadow-lg">
                    {slide.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-8 bg-yellow-500"></div>
                    <h3 className="text-xl md:text-2xl font-serif text-yellow-500 italic">
                      {slide.subtitle}
                    </h3>
                  </div>
                  
                  {/* Short Description */}
                  <p className="text-sm md:text-lg text-white/90 mb-8 max-w-lg leading-relaxed font-medium">
                    {slide.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="bg-yellow-500 text-[#002b5c] font-black py-3 px-8 text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-lg rounded-sm">
                      Learn More
                    </button>
                    <button className="bg-transparent border border-white/40 text-white font-black py-3 px-8 text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all rounded-sm flex items-center gap-2">
                      <Download size={14} /> Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Navigation */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prevSlide} className="p-3 bg-white/10 hover:bg-yellow-500 text-white hover:text-[#002b5c] rounded-full backdrop-blur-md border border-white/10 transition-all">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="p-3 bg-white/10 hover:bg-yellow-500 text-white hover:text-[#002b5c] rounded-full backdrop-blur-md border border-white/10 transition-all">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* PART Progress Sidebar (Refined Size) */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="flex items-center justify-end gap-4 group"
          >
            <span className={`text-[10px] font-bold transition-all tracking-wider uppercase ${
              currentIndex === i ? "text-white" : "text-white/30 group-hover:text-white"
            }`}>
              PT 0{i + 1}
            </span>
            <div className={`transition-all duration-300 rounded-full ${
              currentIndex === i ? "w-3 h-3 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" : "w-2 h-2 bg-white/20"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};
