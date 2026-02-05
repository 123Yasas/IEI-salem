
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920&h=800",
    title: "61st Annual General Meeting",
    description: "Honoring our members and celebrating a legacy of excellence at IEI Salem Local Centre."
  },
  {
    url: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1920&h=800",
    title: "Professional Growth",
    description: "Promoting excellence through collaborative sessions and technical heritage."
  },
  {
    url: "https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&q=80&w=1920&h=800",
    title: "Strategic Partnerships",
    description: "Strengthening ties with industry leaders for the advancement of engineering science."
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovering]);

  return (
    <section 
      className="relative w-full h-[350px] md:h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slides */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img 
              src={slide.url} 
              alt={slide.title} 
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center">
              <div className="container mx-auto px-4 md:px-16 text-white">
                <div className="max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl drop-shadow-sm font-light">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-white text-[#002b5c] font-bold py-3 px-8 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg">
                      Read More
                    </button>
                    <button className="border-2 border-white text-white font-bold py-3 px-8 text-sm uppercase tracking-wider hover:bg-white hover:text-[#002b5c] transition-colors">
                      Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all"
      >
        <ChevronLeft size={30} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === i ? 'bg-white w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};
