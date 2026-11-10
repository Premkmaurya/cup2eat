import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Cups', href: '#product' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Cup2Eat', href: '#why-cup2eat' },
    { label: 'For Businesses', href: '#for-businesses' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-warm-sm border-b border-cream-border/70 py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="CUP2EAT Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/60 p-0.5 bg-forest flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="/logo-mark.svg" alt="CUP2EAT mark" className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-forest leading-none">
                CUP2EAT
              </span>
              <span className="text-[10px] sm:text-[11px] font-heading font-semibold text-gold-dark tracking-widest uppercase mt-0.5">
                Eat Your Drink
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-heading font-medium text-charcoal/80 hover:text-forest transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-forest transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 bg-forest text-cream-soft hover:bg-forest-light px-5 py-2.5 rounded-full text-xs font-heading font-semibold tracking-wide transition-all duration-200 shadow-warm-sm hover:shadow-warm-md focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span>Get a Bulk Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-light" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-forest hover:bg-cream-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-soft border-b border-cream-border px-6 pt-4 pb-8 space-y-4 shadow-warm-md animate-fadeIn">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-heading font-medium text-charcoal hover:text-forest py-2 border-b border-cream-border/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-forest text-cream-soft py-3 px-6 rounded-full text-sm font-heading font-semibold shadow-warm-sm hover:bg-forest-light transition-colors"
            >
              <span>Get a Bulk Quote</span>
              <ArrowUpRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
