import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Soft differ from traditional cloud orchestration platforms?',
      a: 'Traditional platforms require thousands of lines of fragile YAML, external secret management, and manual cluster maintenance. Soft unifies infrastructure definition, CI/CD pipelines, and real-time telemetry into a single declarative control plane that auto-heals itself when failures occur.',
    },
    {
      q: 'Can I migrate my existing Docker containers and microservices?',
      a: 'Yes, absolutely. Soft has native support for standard OCI containers, Dockerfiles, and Helm charts. You can import existing repositories from GitHub, GitLab, or Bitbucket with a single click, and our engine automatically configures build caches and routing.',
    },
    {
      q: 'Does Soft support multi-cloud deployments across AWS, GCP, and Azure?',
      a: 'Yes! You can orchestrate workloads across multiple cloud providers simultaneously, or deploy edge functions onto our worldwide global network of over 280+ points of presence.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get full access to all Professional tier features for 14 days without entering any credit card. If you decide not to upgrade, your account automatically transitions to our free community tier.',
    },
    {
      q: 'Is my data secure and compliant with enterprise standards?',
      a: 'Soft is SOC2 Type II and ISO 27001 certified. All network traffic is encrypted via TLS 1.3, secrets are stored using hardware security modules (HSM), and audit logs are cryptographically verifiable.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#080517] border-y border-[#232035] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181625] border border-[#8650FF]/30 text-xs font-semibold text-[#8650FF] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#D9D3E8]/80">
            Have questions about architecture, scaling, or pricing? Find answers here.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl bg-[#110f20] border border-[#232035] transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#18152c] transition-colors"
                >
                  <span className="text-base font-semibold text-white font-['Plus_Jakarta_Sans']">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8650FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#D9D3E8]/80 leading-relaxed border-t border-[#232035]/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
