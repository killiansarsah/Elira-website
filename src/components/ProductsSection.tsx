import { ArrowRight, ExternalLink } from 'lucide-react';

export const ProductsSection = () => {
  const products = [
    {
      name: 'EyeCare MS',
      tag: 'Healthcare Practice Platform',
      deviceType: 'desktop' as const,
      domain: 'eyecaregh.com',
      image: '/assets/elira/eyecare-dashboard.png',
      description:
        'All-in-one clinical practice management connecting ophthalmic consultations, surgical schedules, inventory, and digital prescriptions.',
      link: 'https://www.eyecaregh.com',
      external: true,
      buttonText: 'Visit eyecaregh.com',
    },
    {
      name: 'EasyPulpit',
      tag: 'Church Presentation Suite',
      deviceType: 'desktop' as const,
      domain: 'easypulpit.app',
      image: '/assets/elira/easypulpit-presenter.png',
      description:
        'Modern desktop presentation and scripture projection suite engineered for seamless church services and multi-screen live display.',
      link: '#contact',
      external: false,
      buttonText: 'Inquire About EasyPulpit',
    },
    {
      name: 'Last Price',
      tag: 'Mobile Commerce & Deals',
      deviceType: 'mobile' as const,
      domain: 'last-price.store',
      image: '/assets/elira/lastprice-mobile.png',
      description:
        'Real-time mobile shopping and deals aggregator connecting buyers with verified merchant electronics discounts and dynamic pricing.',
      link: 'https://last-price.store/',
      external: true,
      buttonText: 'Visit last-price.store',
    },
    {
      name: 'OptoDrive',
      tag: 'Verification Infrastructure',
      deviceType: 'desktop' as const,
      domain: 'optodrive.elira.com',
      image: '/assets/elira/odd.png',
      description:
        'Secure digital verification infrastructure connecting licensing authorities, optical clinics, and practitioners to eliminate document fraud.',
      link: '#contact',
      external: false,
      buttonText: 'Inquire About Platform',
    },
    {
      name: 'FinAdvisory',
      tag: 'Corporate & Advisory Portal',
      deviceType: 'desktop' as const,
      domain: 'finadvisorycc.com',
      image: '/assets/elira/finadvisory-site.png',
      description:
        'Official web presence and digital advisory portal for chartered accounting, statutory audit compliance, and corporate tax advisory.',
      link: 'https://finadvisorycc.com',
      external: true,
      buttonText: 'Visit finadvisorycc.com',
    },
    {
      name: 'MCF Optiques',
      tag: 'Clinical Web Presence',
      deviceType: 'desktop' as const,
      domain: 'mcfoptiques.com',
      image: '/assets/elira/mcfoptiques-site.png',
      description:
        'Modern clinic web portal providing state-of-the-art optical consultation booking, precision care, and patient services in Accra.',
      link: 'https://mcfoptiques.com/',
      external: true,
      buttonText: 'Visit mcfoptiques.com',
    },
  ];

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#050211] relative border-t border-[#1f1b32] overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#fdff50] uppercase mb-3">
            Products
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans'] mb-4">
            What We've Built
          </h2>
          <p className="text-base sm:text-lg text-[#D9D3E8]/80 leading-relaxed font-normal">
            Production-grade web platforms, desktop suites, and mobile applications engineered and deployed by Elira Technology.
          </p>
        </div>

        {/* 3-Column Grid Showcase with Desktop & Mobile Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#0c091d] border border-[#231f38] hover:border-[#fdff50]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#fdff50]/5"
            >
              <div>
                {/* Device Mockup Container */}
                <div className="h-[210px] sm:h-[230px] p-3 sm:p-4 bg-[#100d24] border-b border-[#231f38] flex items-center justify-center">
                  {prod.deviceType === 'mobile' ? (
                    /* Sleek Smartphone Frame */
                    <div className="h-full aspect-[9/18.5] rounded-[1.5rem] border-2 border-[#362e54] bg-[#070512] shadow-2xl p-1 flex flex-col overflow-hidden relative">
                      {/* Top Phone Notch */}
                      <div className="h-3 flex items-center justify-center bg-[#070512] shrink-0">
                        <div className="w-8 h-1.5 rounded-full bg-black border border-white/10" />
                      </div>
                      {/* Mobile Screen Viewport */}
                      <div className="flex-1 rounded-[1rem] overflow-hidden bg-[#0a071b] relative">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    /* Sleek Desktop Computer / Browser Frame */
                    <div className="w-full h-full rounded-xl overflow-hidden border border-[#2a2544] bg-[#070512] shadow-2xl flex flex-col">
                      {/* Top Window Bar */}
                      <div className="flex items-center justify-between px-3 py-1.5 bg-[#17132e] border-b border-white/5 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ff5f56]/75" />
                          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]/75" />
                          <span className="w-2 h-2 rounded-full bg-[#27c93f]/75" />
                        </div>
                        <div className="px-2.5 py-0.5 rounded-md bg-[#0a071b] border border-white/10 text-[10px] font-mono text-[#D9D3E8]/60 truncate max-w-[170px]">
                          {prod.domain}
                        </div>
                        <div className="w-6" />
                      </div>

                      {/* Screenshot Viewport */}
                      <div className="relative flex-1 overflow-hidden bg-[#0a071b]">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#fdff50] uppercase tracking-wider">
                    {prod.tag}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-[#fdff50] transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9D3E8]/75 leading-relaxed font-normal">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1">
                {prod.external ? (
                  <a
                    href={prod.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fdff50] hover:text-white transition-colors"
                  >
                    <span>{prod.buttonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href={prod.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fdff50] hover:text-white transition-colors"
                  >
                    <span>{prod.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
