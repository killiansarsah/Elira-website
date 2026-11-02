import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can partner with Elira Technology?',
      a: 'We work with growing businesses, healthcare clinics, enterprise leaders, churches, retail merchants, and institutions looking to digitize operations, automate workflows, or launch custom software platforms.',
    },
    {
      q: 'How does the zero upfront capital model work?',
      a: 'Instead of charging heavy upfront engineering fees, we partner directly with qualified organizations by co-investing our technical execution into designing, building, and maintaining production-ready software—aligning our success directly with your business growth.',
    },
    {
      q: 'Do you build mobile applications alongside desktop and web software?',
      a: 'Yes. We build unified multi-platform experiences—including native-feel mobile shopping apps like Last Price, patient portals for healthcare systems like EyeCare MS, and dedicated desktop presentation suites like EasyPulpit.',
    },
    {
      q: 'Can Elira integrate with our existing systems and legacy databases?',
      a: 'Absolutely. We specialize in seamless system integration—connecting bespoke cloud applications with legacy databases, third-party APIs, clinical diagnostic devices, and official verification networks.',
    },
    {
      q: 'How long does it take to launch a custom platform?',
      a: 'Because our engineering framework leverages modular, production-tested architectures, we design, test, and deploy functional platforms significantly faster than traditional software agencies—often within weeks rather than months.',
    },
    {
      q: 'Who manages hosting, platform maintenance, and ongoing security?',
      a: 'We manage the entire lifecycle. Elira handles cloud infrastructure, automated backups, performance scaling, and ongoing feature updates so your team can focus entirely on your core operations.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#080517] border-t border-[#1f1b32] relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#fdff50] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            Common Inquiries
          </h2>
          <p className="text-base sm:text-lg text-[#D9D3E8]/80 max-w-2xl mx-auto leading-relaxed">
            Straightforward answers about our engineering capabilities, partnership model, and how we deliver production systems.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0e0b1f] border border-[#231f38] hover:border-[#fdff50]/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 sm:px-7 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-[#15112c] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#fdff50] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-7 sm:pb-6 text-sm sm:text-base text-[#D9D3E8]/80 leading-relaxed border-t border-[#231f38] pt-4 animate-in fade-in duration-200">
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
