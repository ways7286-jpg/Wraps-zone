import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ cart, setIsCartOpen, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Menu', id: 'menu' },
    { label: 'Best Sellers', id: 'best-sellers' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-xs'
          : 'bg-[#FAF9F6]/40 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-[4px] border border-premium-gold/30 bg-white group-hover:border-premium-gold transition-all duration-300">
              <span className="font-serif text-lg font-bold text-premium-gold select-none">W</span>
              <div className="absolute inset-[2px] rounded-[2px] border border-dashed border-premium-gold/10 group-hover:border-premium-gold/30"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxe text-2xl font-bold tracking-[0.03em] uppercase leading-none text-charcoal select-none">
                Wraps<span className="text-premium-gold">Zone</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] text-premium-gold uppercase font-semibold mt-0.5 font-poppins-luxe">
                Hyderabad
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs uppercase tracking-[0.12em] font-semibold relative py-1 transition-all duration-300 font-poppins-luxe cursor-pointer ${
                  activeSection === link.id
                    ? 'text-premium-gold font-bold'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-premium-gold origin-left transition-all duration-300 ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA & Cart Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-[4px] bg-white border border-premium-gold/10 hover:border-premium-gold hover:bg-white text-charcoal transition-all duration-300 cursor-pointer"
              aria-label="Open ordering basket"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-premium-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Desktop Order Online Button */}
            <button
              onClick={() => handleLinkClick('menu')}
              className="hidden sm:flex btn-premium-primary"
            >
              Order Online
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-[4px] bg-white border border-premium-gold/10 hover:border-premium-gold text-charcoal transition-all duration-300 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Sliding Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[69px] left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-premium-gold/15 z-40 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[380px] py-4 shadow-xl' : 'max-h-0 py-0'
        }`}
      >
        <div className="px-4 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left font-poppins-luxe text-xs uppercase tracking-wider font-semibold py-2.5 px-3 rounded-[4px] transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-ivory text-premium-gold pl-5 border-l-2 border-premium-gold'
                  : 'text-charcoal/85 hover:bg-ivory/50 hover:pl-4 hover:text-charcoal'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('menu')}
            className="w-full text-center py-3 mt-4 btn-premium-primary"
          >
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
}
