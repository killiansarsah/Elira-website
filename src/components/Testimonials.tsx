import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'VP of Engineering at FinScale',
      content:
        'Soft reduced our deployment cycle time from 45 minutes down to less than 3 minutes. The auto-healing pipeline rollbacks saved our production cluster more than once.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      rating: 5,
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Infrastructure at CloudPulse',
      content:
        'The sub-millisecond edge telemetry is unmatched. Moving our frontend and serverless microservices onto Soft’s global network sliced our p99 latency in half.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Principal DevOps Architect',
      content:
        'The developer experience is extraordinary. It feels like what cloud orchestration should have always been: fast, intuitive, and remarkably stable.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#050211] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181625] border border-[#8650FF]/30 text-xs font-semibold text-[#8650FF] mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>CUSTOMER REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            Loved by Developers, Trusted by Leaders
          </h2>
          <p className="text-base sm:text-lg text-[#D9D3E8]/80">
            See how forward-thinking teams ship faster and sleep better with Soft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-[#110f20] border border-[#232035] hover:border-[#8650FF]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#f59e0b] mb-6">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#D9D3E8] leading-relaxed mb-6 italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#232035]">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#8650FF]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans']">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#D9D3E8]/60">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
