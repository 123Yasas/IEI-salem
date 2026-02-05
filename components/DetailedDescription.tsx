
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const DetailedDescription: React.FC = () => {
  const points = [
    "To promote and advance the science, practice and business of Engineering in all its branches.",
    "To provide opportunities for the exchange of technical information and ideas.",
    "To organize regular industrial visits, lectures, and technical programs for members.",
    "To foster student chapters and corporate engagement in the Salem region.",
    "To contribute significantly to the local engineering community through policy advocacy."
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002b5c] mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-[#002b5c]">
            Objectives & Activities
          </h2>
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              The IEI Salem Local Centre is committed to providing a vibrant platform for engineering professionals and students. Our objectives align with the national vision of IEI, focusing on regional growth and technical excellence.
            </p>
            <p className="mb-8">
              Through consistent membership activities, we ensure that engineers in Salem stay updated with the latest technological advancements. Our technical programs are designed to address the unique industrial landscape of the region, specifically focusing on manufacturing, textile, and information technology sectors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-lg italic text-[#002b5c] font-semibold">
              "We take pride in our regional contribution, serving as a hub for innovation and professional ethics in the heart of Tamil Nadu."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
