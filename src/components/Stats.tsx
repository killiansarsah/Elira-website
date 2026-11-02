import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { value: '99.99%', label: 'Guaranteed SLA Uptime', subtext: 'Zero unplanned downtime' },
    { value: '10x', label: 'Faster Deployments', subtext: 'From git push to live edge' },
    { value: '50K+', label: 'Active Teams & Devs', subtext: 'Across 140+ countries' },
    { value: '< 15ms', label: 'Global Edge Latency', subtext: '280+ distributed PoPs' },
  ];

  return (
    <section className="py-20 bg-[#050211] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-[#110f20] border border-[#232035] hover:border-[#8650FF]/40 transition-colors text-center group"
            >
              <div className="text-3xl sm:text-5xl font-extrabold text-white mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-[#8650FF] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-[#FFFEFE] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#D9D3E8]/60 font-normal">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
