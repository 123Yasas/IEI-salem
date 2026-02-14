
import React from 'react';
import { UserCheck, GraduationCap, Building2, ChevronRight, ShieldCheck } from 'lucide-react';

export const MembershipSection: React.FC = () => {
  const tiers = [
    {
      title: "Corporate Member",
      icon: <UserCheck size={32} />,
      desc: "For practicing engineers with significant experience. Titles include AMIE, MIE, and FIE.",
      benefits: ["Professional Recognition", "Voting Rights", "Technical Journal Access"],
      color: "border-blue-600"
    },
    {
      title: "Student Member",
      icon: <GraduationCap size={32} />,
      desc: "Empowering the next generation. Join IEI student chapters and build your network.",
      benefits: ["Scholarships", "Competitions", "Internship Assistance"],
      color: "border-yellow-500"
    },
    {
      title: "Institutional Member",
      icon: <Building2 size={32} />,
      desc: "For academic institutions and industry partners seeking strategic collaboration.",
      benefits: ["Industry-Academia Meetups", "Seminar Sponsorship", "R&D Support"],
      color: "border-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#002b5c]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <ShieldCheck size={14} /> Global Network
          </div>
          <h2 className="text-4xl font-bold text-[#002b5c] mb-6 font-serif">Membership Pathways</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Join the largest multi-disciplinary professional body of engineers in the world. Being a member of IEI Salem Local Centre unlocks a world of opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`bg-gray-50 p-8 rounded-2xl border-t-8 ${tier.color} shadow-sm hover:shadow-xl transition-all group flex flex-col h-full`}>
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-[#002b5c] shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {tier.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#002b5c] mb-4">{tier.title}</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">{tier.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    {b}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#002b5c] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-500 hover:text-[#002b5c] transition-all flex items-center justify-center gap-2">
                Apply for Membership <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#001b3a] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Already a Member?</h3>
            <p className="text-blue-200">Update your profile, pay your subscription fees, or upgrade your membership status through our online portal.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-[#002b5c] px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
              Renew Now
            </button>
            <button className="border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Member Portal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
