import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Who We Serve', href: '#who-we-serve', id: 'who-we-serve' },
    { name: 'Why Us', href: '#why-choose-us', id: 'why-choose-us' },
    { name: 'Values', href: '#values', id: 'values' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy-deep/80 backdrop-blur-md border-b border-brand-navy-border/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center">
            <Logo lightText={true} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-medium tracking-wide text-sm transition-all duration-200 relative py-1 hover:text-brand-orange ${
                  activeSection === link.id ? 'text-brand-orange' : 'text-slate-300'
                }`}
              >
                {link.name}
                {/* Active Indicator dot or underline */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange transition-all duration-300 rounded-full ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-[0_0_20px_rgba(255,87,34,0.3)]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-brand-navy-card/50 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-brand-navy-dark/95 backdrop-blur-xl border-l border-brand-navy-border/60 shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          {/* Close button inside Drawer */}
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-slate-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Logo in Drawer */}
          <div className="mb-10 px-2">
            <Logo lightText={true} />
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 flex-grow">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-semibold tracking-wide text-lg py-2 border-b border-brand-navy-border/30 transition-all ${
                  activeSection === link.id
                    ? 'text-brand-orange pl-2'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-auto">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-center bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-[0_4px_15px_rgba(255,87,34,0.3)] hover:shadow-[0_4px_25px_rgba(255,87,34,0.5)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      
      {/* Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity"
        />
      )}
    </nav>
  );
}
