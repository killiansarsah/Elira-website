export const PartnerMarquee = () => {
  const partners = [
    {
      name: 'MCF Optiques',
      logo: '/assets/elira/mcf-optiques.png',
      url: 'https://mcfoptiques.com/',
      heightClass: 'h-11 sm:h-13 md:h-15',
    },
    {
      name: 'FinAdvisory Chartered Accountants',
      logo: '/assets/elira/finadvisory.webp',
      url: 'https://finadvisorycc.com/',
      heightClass: 'h-10 sm:h-12 md:h-14',
    },
    {
      name: 'Ghana Optometric Association',
      logo: '/assets/elira/GOA.png',
      url: 'https://www.eyecaregh.com',
      heightClass: 'h-12 sm:h-14 md:h-16',
    },
    {
      name: 'Diasam',
      logo: '/assets/elira/diasam.png',
      url: undefined,
      heightClass: 'h-10 sm:h-12 md:h-13',
    },
    {
      name: 'Enterprise Partner',
      logo: '/assets/elira/5-410x230.png',
      url: undefined,
      heightClass: 'h-10 sm:h-12 md:h-13',
    },
  ];

  // Repeat items for seamless, continuous infinite looping (identical halves for translateX(-50%))
  const setOfPartners = [...partners, ...partners];
  const marqueeItems = [...setOfPartners, ...setOfPartners];

  return (
    <section className="py-10 sm:py-16 bg-white border-y border-slate-200 overflow-hidden relative shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-9 text-center">
        <p className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">
          Trusted Clients & Institutional Partners
        </p>
      </div>

      {/* Edge gradient mask for smooth fade-in and fade-out */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee flex items-center gap-10 sm:gap-18 md:gap-26 py-2 select-none">
          {marqueeItems.map((partner, index) => {
            const logoImage = (
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.heightClass} w-auto max-w-[220px] object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 pointer-events-auto filter drop-shadow-sm`}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            );

            return partner.url ? (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${partner.name}`}
                className="shrink-0 flex items-center justify-center transition-transform duration-300 cursor-pointer"
              >
                {logoImage}
              </a>
            ) : (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center transition-transform duration-300"
              >
                {logoImage}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
