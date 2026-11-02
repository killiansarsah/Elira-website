import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 bg-[#050211] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#8650FF]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#1c1836] via-[#120f24] to-[#0d0b1a] border border-[#3b3461] text-center shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201c3d] border border-[#8650FF]/40 text-xs font-semibold text-white mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#8650FF]" />
            <span>START SCALING TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto leading-tight">
            Ready to Supercharge Your Cloud Architecture?
          </h2>

          <p className="text-base sm:text-lg text-[#D9D3E8]/80 max-w-xl mx-auto mb-10">
            Join thousands of engineering teams deploying with speed, resilience, and confidence. Get started with zero setup fees.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full px-5 py-3.5 rounded-full bg-[#0a0817] border border-[#3b3461] text-white placeholder-[#D9D3E8]/40 text-sm focus:outline-none focus:border-[#8650FF] focus:ring-2 focus:ring-[#8650FF]/30 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#8650FF] hover:bg-[#632AE2] text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#8650FF]/30 hover:shadow-xl hover:shadow-[#8650FF]/50 transition-all shrink-0"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10b981]/15 border border-[#10b981]/40 text-[#10b981] font-semibold text-sm animate-in fade-in">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thank you! Check your inbox to activate your account.</span>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D9D3E8]/60">
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 2-minute setup</span>
          </div>
        </div>
      </div>
    </section>
  );
};
