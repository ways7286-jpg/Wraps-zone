import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import signatureWrap from '../assets/images/signature_wraps_close_1779784204697.png';
import cafeInterior from '../assets/images/cafe_interior_luxury_1779784183566.png';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-premium-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Presentation (Grid of detailed luxury cafe settings) */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[4px] overflow-hidden aspect-[3/4] shadow-xs border border-premium-gold/15"
                >
                  <img
                    src={signatureWrap}
                    alt="Fresh chicken wraps preparation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-[4px] p-6 border border-premium-gold/15 text-center shadow-xs"
                >
                  <span className="font-serif-luxe text-3xl font-bold text-premium-gold leading-none">1:00 PM</span>
                  <p className="text-[10px] text-charcoal/60 mt-1 font-bold tracking-widest uppercase font-poppins-luxe">Daily Opening</p>
                </motion.div>
              </div>

              <div className="space-y-4 pt-8">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-premium-gold text-white rounded-[4px] p-6 text-center select-none shadow-sm"
                >
                  <span className="font-serif-luxe text-3xl font-semibold leading-none">100%</span>
                  <p className="text-[10px] text-white/95 mt-1 font-bold tracking-widest uppercase font-poppins-luxe">Locally Sourced</p>
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-[4px] overflow-hidden aspect-[3/4] shadow-xs border border-premium-gold/15"
                >
                  <img
                    src={cafeInterior}
                    alt="Cafe modern ambience and interior styling"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>

            </div>

            {/* Back Gold Ornament Accent */}
            <div className="absolute -z-10 bottom-4 -left-4 w-40 h-40 bg-premium-gold/5 rounded-full blur-2xl"></div>
          </div>

          {/* About Text details column */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1.5px] w-10 bg-premium-gold inline-block"></span>
              <span className="text-xs tracking-[0.2em] font-poppins-luxe font-bold uppercase text-premium-gold">
                Our Heritage &amp; Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight mb-6 leading-tight">
              The Story of <span className="font-serif-luxe italic font-bold text-premium-gold">Wraps Zone</span>
            </h2>

            <p className="text-sm text-charcoal/70 leading-relaxed font-sans mb-6">
              Wraps Zone brings together delicious wraps, juicy broast chicken, flavorful Chinese dishes, gourmet burgers, sandwiches, fresh signature mojitos, and quick bites under one spectacular roof.
            </p>

            <p className="text-sm text-charcoal/70 leading-relaxed font-sans mb-8">
              Every dish is prepared fresh using highest-quality ingredients to create unforgettable flavors. We honor traditional secrets from frying broast bone-in pieces to folding thin whole-wheat tortillas. When you select Wraps Zone, you are choosing culinary passion served fresh and hot.
            </p>

            {/* Quality list checkmarks */}
            <div className="grid sm:grid-cols-2 gap-4 border-t border-premium-gold/15 pt-8">
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-premium-gold/10 flex items-center justify-center text-premium-gold shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-charcoal uppercase tracking-widest font-poppins-luxe block">Hygienic Standards</span>
                  <span className="text-[11px] text-charcoal/50">Clean kitchens certified daily</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-premium-gold/10 flex items-center justify-center text-premium-gold shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 fill-premium-gold/20" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-charcoal uppercase tracking-widest font-poppins-luxe block">Made with Love</span>
                  <span className="text-[11px] text-charcoal/50">Prepared fresh per customer ticket</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-premium-gold/10 flex items-center justify-center text-premium-gold shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-charcoal uppercase tracking-widest font-poppins-luxe block">Signature Flavors</span>
                  <span className="text-[11px] text-charcoal/50">Secret spices and custom sauces</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
