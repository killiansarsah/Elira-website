import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Network, 
  Users, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: <Zap className="w-6 h-6 text-[#8650FF]" />,
      title: 'Autonomous Workflow Engine',
      description:
        'Eliminate repetitive CI/CD scripts and manual operations. Define jobs declaratively and let our intelligent engine auto-heal and optimize.',
      badge: 'Core Engine',
      colSpan: 'md:col-span-2',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#38bdf8]" />,
      title: 'Zero-Latency Edge Network',
      description:
        'Distribute static assets, serverless functions, and microservices across 280+ POPs with sub-15ms regional routing.',
      badge: 'Global CDN',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#10b981]" />,
      title: 'Enterprise-Grade Security',
      description:
        'SOC2 Type II, ISO 27001, end-to-end TLS 1.3 encryption, automatic secret rotation, and immutable audit logging out of the box.',
      badge: 'Compliance',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#f59e0b]" />,
      title: 'Predictive Anomaly Detection',
      description:
        'Proactively catch memory spikes, latency regressions, and database bottlenecks before they impact your end customers.',
      badge: 'AI Telemetry',
      colSpan: 'md:col-span-2',
    },
    {
      icon: <Network className="w-6 h-6 text-[#ec4899]" />,
      title: 'Unified GraphQL & Event APIs',
      description:
        'Connect effortlessly to Stripe, AWS, GitHub, Slack, and internal databases with instant real-time webhook listeners.',
      badge: 'Extensible',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <Users className="w-6 h-6 text-[#8650FF]" />,
      title: 'Multi-Tenant Team Collaboration',
      description:
        'Granular RBAC, SAML SSO, environment-level permissions, and real-time team collaboration with audit trails.',
      badge: 'Access Control',
      colSpan: 'md:col-span-2',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#050211]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181625] border border-[#8650FF]/30 text-xs font-semibold text-[#8650FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNMATCHED PERFORMANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 font-['Plus_Jakarta_Sans']">
            Engineered for Speed, Built for Reliability
          </h2>
          <p className="text-base sm:text-lg text-[#D9D3E8]/80 leading-relaxed">
            Everything your engineering team needs to scale from Day 1 to millions of users without managing complex server infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureList.map((item, index) => (
            <div
              key={index}
              className={`${item.colSpan} group relative rounded-2xl p-7 bg-[#131122] border border-[#232035] hover:border-[#8650FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#8650FF]/10 flex flex-col justify-between overflow-hidden`}
            >
              {/* Subtle gradient corner hover highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8650FF]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#8650FF]/25 transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1a172c] border border-[#2d2946] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#201c38] transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8650FF] bg-[#8650FF]/10 px-2.5 py-1 rounded-md border border-[#8650FF]/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors font-['Plus_Jakarta_Sans']">
                  {item.title}
                </h3>
                <p className="text-sm text-[#D9D3E8]/70 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#232035]/80 flex items-center justify-between text-xs font-semibold text-[#D9D3E8]/70 group-hover:text-white transition-colors">
                <span>Explore capability</span>
                <ArrowUpRight className="w-4 h-4 text-[#8650FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
