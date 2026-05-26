import React from 'react';
import { Instagram, Facebook, MessageSquare, Heart, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Menu', id: 'menu' },
    { label: 'Best Sellers', id: 'best-sellers' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Editorial background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onScrollToSection('home')}>
              <div className="w-9 h-9 rounded-[4px] border border-premium-gold/40 bg-zinc-900 flex items-center justify-center">
                <span className="font-serif font-bold text-premium-gold text-base">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                  Wraps <span className="text-premium-gold">Zone</span>
                </span>
                <span className="text-[9px] tracking-widest text-premium-gold uppercase font-bold mt-1 font-poppins-luxe">
                  Premium Destination
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed font-sans max-w-sm">
              Hyderabad’s definitive premium food hub delivering fresh, toasted wraps prepared under hygienic benchmarks alongside our signature crispy, double-breaded bone-in broast. Savor unforgettable flavor profiles served hot.
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-[4px] bg-zinc-900 hover:bg-premium-gold hover:text-white text-white/60 flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-[4px] bg-zinc-900 hover:bg-premium-gold hover:text-white text-white/60 flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919866728123"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-[4px] bg-zinc-900 hover:bg-emerald-600 hover:text-white text-white/60 flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="WhatsApp Chat Link"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links map column */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-premium-gold pl-2">
              Sitemaps &amp; Quick Links
            </h4>
            
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs font-medium font-poppins-luxe">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="text-white/60 hover:text-premium-gold transition-all duration-300 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Dining inquiries column */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-premium-gold pl-2">
              Dining Inquiries
            </h4>

            <ul className="text-xs space-y-3 text-white/60 font-sans">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-premium-gold shrink-0 mt-0.5" />
                <span>
                  8-3-369, New Shastry Nagar, Sultan Bagh, Erragadda, Hyderabad, Telangana 500114
                </span>
              </li>

              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-premium-gold shrink-0" />
                <span>09866728123</span>
              </li>

              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-premium-gold shrink-0" />
                <span>hospitality@wrapszone.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <span>
            © {new Date().getFullYear()} Wraps Zone Restaurants Pvt Ltd. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 animate-pulse" /> in Hyderabad, India
          </span>
        </div>

      </div>
    </footer>
  );
}
