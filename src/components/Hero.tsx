import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Flame, Truck, Phone, MapPin } from 'lucide-react';
import heroImage from '../assets/images/wraps_hero_premium_1779784163344.png';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:py-32 bg-white overflow-hidden flex items-center min-h-[92vh]"
    >
      {/* Editorial Luxury Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Tagline Pre-Header */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
              <span className="text-[11px] tracking-[0.2em] font-poppins-luxe font-bold uppercase text-premium-gold select-none">
                Hyderabad's Finest Destination
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-5xl sm:text-6xl font-bold text-charcoal tracking-normal leading-[1.1] mb-6"
            >
              Wrapped Fresh.<br />
              Served Hot.<br />
              <span className="text-premium-gold font-serif-luxe">Loved Always.</span>
            </motion.h1>

            {/* Subheadline Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-charcoal/70 leading-relaxed font-sans max-w-xl mb-8"
            >
              Experience the luxury of premium ingredients. From our signature Crispy Broast to artisan wraps and refreshing mojitos.
            </motion.p>

            {/* Interactive Call-To-Action Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <button
                onClick={() => onScrollToSection('menu')}
                className="btn-premium-primary h-12.5 px-6 text-xs tracking-widest text-center flex items-center gap-2"
              >
                Order Online
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <a
                href="tel:09866728123"
                className="btn-premium-secondary h-12.5 px-6 text-xs tracking-widest text-center flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Cafe
              </a>

              <a
                href="https://maps.app.goo.gl/ed499edec5e7f62c"
                target="_blank"
                rel="noreferrer"
                className="btn-premium-secondary h-12.5 px-6 text-xs tracking-widest text-center flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                Find Cafe
              </a>
            </motion.div>

            {/* Trust Badges Area (Luxury Icons with descriptions) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-beige/80 max-w-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center text-premium-gold shrink-0">
                  <Star className="w-4 h-4 fill-premium-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal leading-none">Fresh Daily</span>
                  <span className="text-[10px] text-charcoal/50">100% Organic</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center text-premium-gold shrink-0">
                  <Flame className="w-4 h-4 fill-premium-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal leading-none">Best Selling</span>
                  <span className="text-[10px] text-charcoal/50">Signature Taste</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center text-premium-gold shrink-0">
                  <Truck className="w-4 h-4 text-premium-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal leading-none">Fast Delivery</span>
                  <span className="text-[10px] text-charcoal/50">Erragadda &amp; Around</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Composite Creative Photo Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[450px] aspect-square rounded-[2rem] overflow-hidden group shadow-2xl border-4 border-white/80"
            >
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent z-10"></div>
              
              {/* Epic Food Presentation Photo Background */}
              <img
                src={heroImage}
                alt="Wraps Zone Fine Dining Food Composition"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dynamic Overlay Floating Pricing Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end text-white">
                <div>
                  <span className="text-[10px] tracking-widest font-semibold uppercase text-premium-gold-light font-poppins-luxe mb-1 block">
                    Chef Recommendation
                  </span>
                  <h4 className="font-serif text-xl font-medium tracking-tight">
                    Crispy Chicken Wrap &amp; Mojitos
                  </h4>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 text-right">
                  <span className="text-[9px] text-white/70 block uppercase">Combo From</span>
                  <span className="font-serif font-bold text-premium-gold-light">₹299</span>
                </div>
              </div>

              {/* Gold borders visual accents */}
              <div className="absolute inset-4 border border-white/20 rounded-[1.5rem] pointer-events-none z-20 transition-all duration-500 group-hover:inset-3 group-hover:border-premium-gold-light/40"></div>
            </motion.div>

            {/* Decorative Floating circular elements for high-end feel */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-premium-gold/20 to-transparent blur-xl rounded-full z-0 pointer-events-none"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-beige/80 blur-2xl rounded-full z-0 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
