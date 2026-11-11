import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuCloseButtonRef = useRef<HTMLButtonElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuCloseButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !menuPanelRef.current) return;

      const focusableElements = menuPanelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      menuToggleRef.current?.focus();
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'The Cup', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Where It Belongs', href: '#venues' },
    { label: 'Seen & Enjoyed', href: '#community' },
    { label: 'For Venues', href: '#business' },
  ];

  return (
    <>
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
              ref={menuToggleRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-cream-muted/70"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      </header>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-deep/80 p-3 backdrop-blur-sm md:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          />
          <div
            ref={menuPanelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="relative mx-auto flex h-full max-h-[900px] w-full max-w-[560px] flex-col overflow-y-auto rounded-[24px] border border-gold/40 bg-cream-soft px-5 pb-5 pt-[max(20px,env(safe-area-inset-top))] shadow-deep-lg sm:px-7"
          >
            <div className="mb-3 flex items-center justify-between border-b border-cream-border/80 pb-3">
              <span className="text-[11px] font-heading font-bold tracking-[0.16em] text-forest">
                CUP2EAT <span className="text-terracotta">/</span> MENU
              </span>
              <button
                ref={menuCloseButtonRef}
                type="button"
                onClick={closeMobileMenu}
                className="flex min-h-11 items-center gap-2 rounded-full px-3 text-[11px] font-heading font-bold tracking-[0.12em] text-forest transition-colors hover:bg-cream-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Close menu"
              >
                CLOSE <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Main navigation" className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex min-h-11 items-center border-b border-cream-border/70 py-1 font-serif text-[clamp(1.65rem,6vw,2rem)] font-medium uppercase leading-tight tracking-[-0.035em] text-forest transition-colors hover:text-terracotta"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="https://www.instagram.com/cup2eat/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="group relative mt-4 h-[clamp(140px,22vh,190px)] flex-none overflow-hidden rounded-2xl bg-forest text-cream-soft shadow-warm-md transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="Visit CUP2EAT on Instagram"
            >
              <img
                src="/images/social-people.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/15 to-transparent" />
              <span className="relative mt-auto flex w-full items-center justify-between gap-3 p-4 sm:p-5">
                <span className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.1em] text-cream-soft sm:text-sm">
                  <InstagramIcon className="h-5 w-5 text-cream-soft" />
                  Join us on Instagram
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
              </span>
            </a>

            <div className="pt-3 text-[10px] font-heading tracking-[0.16em] text-forest/70">
              EAT YOUR DRINK <span className="px-1 text-terracotta">·</span> CUP2EAT
            </div>
          </div>
        </div>
      )}
    </>
  );
};
