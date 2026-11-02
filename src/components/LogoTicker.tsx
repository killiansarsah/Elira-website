import React from 'react';

export const LogoTicker: React.FC = () => {
  const companies = [
    { name: 'ApexCloud', symbol: '▲' },
    { name: 'NovaPulse', symbol: '✦' },
    { name: 'HyperScale', symbol: '⬡' },
    { name: 'Veloce.io', symbol: '⚡' },
    { name: 'SynapseNet', symbol: '❖' },
    { name: 'CloudSphere', symbol: '◈' },
  ];

  return (
    <section className="py-12 border-y border-[#232035] bg-[#080517]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-wider text-[#D9D3E8]/50 uppercase mb-8">
          Trusted by engineering leaders & dev teams at 35,000+ forward-thinking organizations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center opacity-70">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center gap-2 text-base font-bold text-white/80 hover:text-white transition-opacity cursor-pointer group"
            >
              <span className="text-[#8650FF] text-xl group-hover:scale-110 transition-transform">
                {company.symbol}
              </span>
              <span className="tracking-tight font-['Plus_Jakarta_Sans']">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
