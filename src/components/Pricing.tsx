import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      badge: 'For Small Teams & Side Projects',
      monthlyPrice: 29,
      annualPrice: 23,
      description: 'Essential cloud automation and deployment tools to get your app off the ground.',
      highlight: false,
      features: [
        'Up to 5 team members',
        '30 concurrent builds / mo',
        'Standard Edge CDN (50 PoPs)',
        'Basic telemetry & 7-day retention',
        'Community Discord & email support',
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Professional',
      badge: 'MOST POPULAR',
      monthlyPrice: 79,
      annualPrice: 63,
      description: 'Ideal for scaling startups and fast-growing product companies needing velocity.',
      highlight: true,
      features: [
        'Up to 25 team members',
        'Unlimited parallel workflows',
        'Full Global Edge CDN (280+ PoPs)',
        'Advanced telemetry & 60-day retention',
        'Auto-healing pipeline rollbacks',
        'Priority 24/7 Slack & email support',
        'Custom domain SSL certificates',
      ],
      cta: 'Start 14-Day Free Trial',
    },
    {
      name: 'Enterprise',
      badge: 'Dedicated Scalability',
      monthlyPrice: 199,
      annualPrice: 159,
      description: 'Custom infrastructure controls, dedicated VPC peering, and enterprise compliance.',
      highlight: false,
      features: [
        'Unlimited team seats & sub-orgs',
        'Dedicated isolated clusters',
        '99.99% Guaranteed SLA uptime',
        'Custom SSO / SAML & SCIM directory',
        'SOC2 Type II & HIPAA compliance report',
        'Dedicated technical account manager',
        'Custom billing & invoicing',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#080517] border-y border-[#232035] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181625] border border-[#8650FF]/30 text-xs font-semibold text-[#8650FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            Invest in Velocity, Not Overhead
          </h2>
          <p className="text-base sm:text-lg text-[#D9D3E8]/80 mb-8">
            Start for free, test in staging, and scale smoothly as your user base grows. Cancel anytime.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-[#131122] border border-[#232035]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                !annual
                  ? 'bg-[#8650FF] text-white shadow-md'
                  : 'text-[#D9D3E8]/70 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                annual
                  ? 'bg-[#8650FF] text-white shadow-md'
                  : 'text-[#D9D3E8]/70 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-[#10b981] text-black font-extrabold px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? 'bg-[#151226] border-2 border-[#8650FF] shadow-2xl shadow-[#8650FF]/25 lg:-translate-y-2'
                    : 'bg-[#100e1f] border border-[#232035] hover:border-[#8650FF]/40'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8650FF] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                      {plan.name}
                    </h3>
                    {!plan.highlight && (
                      <span className="text-[11px] font-medium text-[#D9D3E8]/60 bg-[#181625] px-2.5 py-1 rounded-md">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#D9D3E8]/70 mb-6 min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-[#232035]">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                      ${price}
                    </span>
                    <span className="text-sm text-[#D9D3E8]/60 font-medium">/ seat / month</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                      What's Included:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#D9D3E8]">
                        <Check className="w-4 h-4 text-[#8650FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#cta"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-[#8650FF] hover:bg-[#632AE2] text-white shadow-lg shadow-[#8650FF]/30 hover:shadow-xl'
                      : 'bg-[#181625] hover:bg-[#221f36] border border-[#2C2840] hover:border-[#8650FF]/50 text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
