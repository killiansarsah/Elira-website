import { MapPin, Mail, Phone } from 'lucide-react';
import { EliraLogo } from './EliraLogo';

export const FooterSection = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#04020c] border-t border-[#1f1b32] pt-12 sm:pt-16 pb-10 sm:pb-12 text-[#D9D3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 mb-10 sm:mb-14">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <EliraLogo />
            <p className="text-sm text-[#D9D3E8]/80 leading-relaxed max-w-sm">
              The Future, Thoughtfully Delivered. Designing and deploying enterprise cloud software, clinical workflows, and verification ecosystems without upfront capital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#D9D3E8]/80 hover:text-[#fdff50] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans'] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#fdff50]" />
              Office
            </h4>
            <p className="text-sm text-[#D9D3E8]/80 leading-relaxed">
              The Elira, 41 Galphinia Street,<br />
              Dansoman, Accra, Ghana
            </p>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
              Contacts
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-xs text-[#D9D3E8]/50 block">Email us:</span>
                <a
                  href="mailto:comp@theelira.com"
                  className="text-white hover:text-[#fdff50] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Mail className="w-4 h-4 text-[#fdff50]" />
                  comp@theelira.com
                </a>
              </div>
              <div className="pt-1">
                <span className="text-xs text-[#D9D3E8]/50 block">Call us:</span>
                <a
                  href="tel:+233246761751"
                  className="text-white hover:text-[#fdff50] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Phone className="w-4 h-4 text-[#fdff50]" />
                  +233 24 676 1751
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1a1728] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9D3E8]/50">
          <div>
            © {new Date().getFullYear()} Elira. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
