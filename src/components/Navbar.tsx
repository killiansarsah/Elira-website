import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { EliraLogo } from './EliraLogo';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'products', name: 'Products', href: '#products' },
    { id: 'faq', name: 'FAQ', href: '#faq' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // ScrollSpy to track whichever section is currently on screen
  useEffect(() => {
    const sectionIds = ['home', 'about', 'products', 'faq', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;

      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3.5 sm:py-5 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Interactive Kinetic Logo on Left */}
          <EliraLogo onClick={(e) => handleNavClick(e, 'home')} />

          {/* Centered Floating Minimalist Liquid Glass Capsule for Desktop */}
          <nav className="glass-pill-minimal hidden md:flex items-center gap-1 p-1 transition-all duration-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-[13px] font-medium px-4 py-1.5 rounded-full cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'glass-active-minimal'
                      : 'glass-item-minimal'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA on Right */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-2 bg-[#fdff50] hover:bg-[#e2e438] text-[#050211] text-xs font-bold px-5 py-2.5 rounded-full shadow-md shadow-[#fdff50]/20 hover:shadow-lg hover:shadow-[#fdff50]/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 text-[#050211]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="glass-pill-minimal w-10 h-10 rounded-full flex items-center justify-center text-[#D9D3E8] hover:text-[#fdff50] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 relative z-10" />
              ) : (
                <Menu className="w-5 h-5 relative z-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu - Responsive Glass Sheet */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-4 right-4 max-w-sm mx-auto z-50 md:hidden glass-sheet p-5 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col space-y-1 relative z-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#fdff50]/15 text-[#fdff50] font-semibold border border-[#fdff50]/30'
                      : 'text-[#D9D3E8] hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#fdff50] shadow-sm shadow-[#fdff50]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 relative z-10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#fdff50] hover:bg-[#e2e438] text-[#050211] text-sm font-bold py-3 rounded-full shadow-lg shadow-[#fdff50]/20 transition-all cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-4 h-4 text-[#050211]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
