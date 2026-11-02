import { ArrowRight } from 'lucide-react';

export const CTABanner = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#050211] relative overflow-hidden border-t border-[#1f1b32] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Banner with decor-container-04.jpg wallpaper from elementor-element-7e1232e */}
        <div 
          className="rounded-3xl p-6 sm:p-12 md:p-16 border border-[#2e2947] shadow-2xl relative overflow-hidden bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/assets/decor-container-04.jpg')` }}
        >
          {/* Subtle dark overlay to ensure high contrast */}
          <div className="absolute inset-0 bg-[#0c091d]/75 backdrop-blur-[2px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest text-[#fdff50] uppercase mb-4 sm:mb-5">
              Contact
            </p>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto leading-tight">
              Ready to engineer your next platform?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#D9D3E8] max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
              Whether you want to automate clinical workflows, launch a verification network, or build custom software with zero upfront capital risk, we're ready to build with you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="mailto:comp@theelira.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#fdff50] hover:bg-[#e2e438] text-[#050211] font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-[#fdff50]/20 hover:shadow-xl hover:shadow-[#fdff50]/35 transition-all duration-200"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#050211]" />
              </a>
              <a
                href="tel:+233246761751"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-full bg-[#110e21]/80 backdrop-blur-md border border-white/10 hover:border-[#fdff50]/40 transition-colors"
              >
                Call Us: +233 24 676 1751
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
