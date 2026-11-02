export const SmartSaaSSection = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Custom Web & Enterprise Software',
      desc: 'Bespoke web applications, APIs, and scalable cloud platforms tailored to your business operations.',
    },
    {
      num: '02',
      title: 'Specialized Management Systems',
      desc: 'Turnkey operational platforms—from ophthalmic clinic workflows (EyeCare Gh) to licensing verification networks (OptoDrive).',
    },
    {
      num: '03',
      title: 'Zero Upfront Capital Model',
      desc: 'We eliminate technical risk by co-investing engineering execution directly into viable software platforms.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0a071b] border-t border-[#1f1b32] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Clean Editorial Overview */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold tracking-widest text-[#fdff50] uppercase">
              About
            </p>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans']">
              We engineer custom software and platforms built to scale.
            </h2>

            <p className="text-base sm:text-lg text-[#D9D3E8]/80 leading-relaxed font-normal">
              Elira Technology is an engineering partner. We build, deploy, and maintain custom web applications, management systems, and enterprise infrastructure—eliminating heavy development risk with our zero-upfront-capital model.
            </p>
          </div>

          {/* Right Column: Clean 3-Item List with Hairline Dividers */}
          <div className="lg:col-span-7 divide-y divide-white/10 lg:pt-3">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0 group"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-mono text-xs font-semibold text-[#fdff50] tracking-wider">
                    {item.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-[#fdff50] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#D9D3E8]/70 leading-relaxed font-normal pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
