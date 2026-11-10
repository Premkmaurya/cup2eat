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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Cup', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Where It Belongs', href: '#venues' },
    { label: 'Seen & Enjoyed', href: '#community' },
    { label: 'For Venues', href: '#business' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-cream-border py-4 shadow-warm-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark & Emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="CUP2EAT Home"
          >
            <div className="w-9 h-9 rounded-full bg-forest border border-gold/40 flex items-center justify-center p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img src="/logo-mark.svg" alt="CUP2EAT insignia" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-forest leading-none">
                CUP2EAT
              </span>
              <span className="text-[10px] font-heading font-medium tracking-[0.2em] text-gold-dark uppercase mt-0.5">
                Eat Your Drink
              </span>
            </div>
          </a>

          {/* Editorial Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
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

          {/* Primary Action Button */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 bg-forest text-cream-soft hover:bg-forest-light px-5 py-2.5 rounded-full text-xs font-heading font-semibold tracking-wide transition-all duration-300 shadow-warm-sm hover:shadow-warm-md"
            >
              <span>Bulk Enquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-forest rounded-lg hover:bg-cream-muted/60 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-soft border-b border-cream-border px-6 py-6 space-y-4 shadow-warm-md">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-serif font-medium text-forest py-2 border-b border-cream-border/40"
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
              className="w-full flex items-center justify-center gap-2 bg-forest text-cream-soft py-3 rounded-full text-xs font-heading font-semibold shadow-warm-sm"
            >
              <span>Bulk Enquiries</span>
              <ArrowUpRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
