import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
            <span className="text-xs tracking-[0.2em] font-poppins-luxe font-bold uppercase text-premium-gold">
              Guest Testimonials
            </span>
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
            Loved By <span className="font-serif-luxe italic font-bold text-premium-gold">Thousands Globally</span>
          </h2>
          
          <p className="text-sm text-charcoal/60 mt-3 font-sans">
            Do not just take our word for it—read real verified feedback from food critics, families, and Hyderabad's major cafe reviewers.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r, index) => (
            <motion.div
              key={r.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-premium-gold/15 p-8 sm:p-10 rounded-[4px] shadow-xs relative flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div>
                
                {/* Decorative citation shape */}
                <Quote className="absolute top-8 right-8 w-10 h-10 text-premium-gold/10 stroke-[1.5]" />

                {/* Stars container */}
                <div className="flex items-center gap-1 mb-6 text-premium-gold">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-premium-gold text-premium-gold" />
                  ))}
                </div>

                {/* Testimonial text quote */}
                <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed font-sans mb-8 italic">
                  "{r.comment}"
                </p>

              </div>

              {/* Author signature section */}
              <div className="flex items-center gap-3.5 border-t border-premium-gold/5 pt-6">
                
                {/* Premium mock photo initials */}
                <div className="w-10 h-10 rounded-[4px] bg-premium-gold/10 text-premium-gold flex items-center justify-center font-serif text-sm font-bold tracking-wider uppercase select-none shrink-0 border border-premium-gold/10">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal tracking-tight font-poppins-luxe">
                    {r.name}
                  </span>
                  
                  {r.role && (
                    <span className="text-[10px] text-charcoal/40 font-medium font-mono uppercase tracking-wider">
                      {r.role}
                    </span>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Guest satisfaction badge */}
        <div className="mt-14 text-center max-w-md mx-auto flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-[4px] bg-red-50 flex items-center justify-center text-red-500 border border-red-100">
            <Heart className="w-4 h-4 fill-red-500 animate-pulse" />
          </div>
          <span className="text-xs text-charcoal/50 font-bold font-poppins-luxe tracking-wider uppercase">
            Over 10,000+ happy dining checkouts served
          </span>
        </div>

      </div>
    </section>
  );
}
