import { ArrowRight, Code2, Layers, ShieldCheck } from 'lucide-react';
import { HeroCanvasGradient } from './HeroCanvasGradient';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 md:pt-48 md:pb-36 overflow-hidden max-w-full bg-[#050211] scroll-mt-24">
      {/* 1. Living Fluid Aurora Gradient Canvas (Moving color video effect) */}
      <HeroCanvasGradient />

      {/* 2. Main Cosmic Starry Wallpaper (Live site decor-hero-bg.jpg) with screen blend mode */}
      <div 
        className="absolute inset-0 bg-top bg-no-repeat bg-cover pointer-events-none select-none z-0 opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url('/assets/decor-hero-bg.jpg')` }}
      />

      {/* 3. Left Cosmic Dots Cluster */}
      <div className="hidden sm:block absolute -left-[12%] top-[2%] w-[60vw] max-w-[850px] pointer-events-none select-none z-0 opacity-60">
        <img
          src="/assets/decor-dots.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 4. Right Cosmic Dots Cluster */}
      <div className="hidden sm:block absolute -right-[10%] bottom-[8%] w-[55vw] max-w-[800px] pointer-events-none select-none z-0 opacity-50">
        <img
          src="/assets/decor-dots.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Headline with Live Animated Gradient */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-5 sm:mb-6 font-['Plus_Jakarta_Sans']">
          Enterprise Software.{' '}
          <span className="bg-gradient-to-r from-[#ffea75] via-[#fdff50] to-[#e2b6ff] bg-clip-text text-transparent inline sm:inline-block">
            Zero Upfront Capital
          </span>
        </h1>

        {/* Subtitle broadcasting what Elira Technology actually does */}
        <p className="text-sm sm:text-lg md:text-xl text-[#D9D3E8] max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed font-normal">
          We architect, build, and deploy custom software, web platforms, and clinical management systems for growing organizations — eliminating heavy upfront capital through risk-free partnership.
        </p>

        {/* High-Impact Dual Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#fdff50] hover:bg-[#e2e438] text-[#050211] font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(253,255,80,0.25)] hover:shadow-[0_12px_32px_rgba(253,255,80,0.4)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Explore What We Build</span>
            <ArrowRight className="w-4 h-4 text-[#050211]" />
          </a>

          <a
            href="#contact"
            className="glass-pill-minimal w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white hover:text-[#fdff50] hover:bg-white/[0.12] transition-all duration-200 cursor-pointer"
          >
            <span>Partner With Us</span>
          </a>
        </div>

        {/* Refined Enterprise Capability Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 pt-6 border-t border-white/[0.08] max-w-3xl mx-auto w-full px-2">
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#D9D3E8]/85 font-medium">
            <Code2 className="w-4 h-4 text-[#fdff50]" />
            <span>Custom Software & Platforms</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#D9D3E8]/85 font-medium">
            <Layers className="w-4 h-4 text-[#fdff50]" />
            <span>Clinical & Healthcare Systems</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#D9D3E8]/85 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#fdff50]" />
            <span>Zero Upfront Capital Model</span>
          </div>
        </div>
      </div>
    </section>
  );
};
