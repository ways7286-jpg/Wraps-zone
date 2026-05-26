import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Shield, Zap, BadgePercent, Users, UtensilsCrossed } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: 'Fresh Ingredients',
      desc: 'Sourced daily from premium local farms to ensure every bite of raw wrap or seasoning is fresh and crisp.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Hygienic Kitchen',
      desc: 'Our chefs operate under global food hygiene protocols, utilizing sterilized workstations and fresh cookware.'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Lightning Service',
      desc: 'Orders are prepared fresh on demand and packed in premium insulated boxes so they arrive piping hot.'
    },
    {
      icon: <BadgePercent className="w-5 h-5" />,
      title: 'Affordable Pricing',
      desc: 'Enjoy restaurant-quality meals and high-end visual packaging experience at pocket-friendly price points.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Family Friendly',
      desc: 'A diverse, warm, and inviting selection of spices mapped perfectly to accommodate kids, youth, and senior citizens.'
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5" />,
      title: 'Wide Variety Menu',
      desc: 'From our authentic Chinese special noodles to golden broast chicken thighs and mocktails, satisfy every craving.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-premium-gold/15 relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-[#FAF9F6] rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
            <span className="text-xs tracking-[0.2em] font-poppins-luxe font-bold uppercase text-premium-gold">
              What Sets Us Apart
            </span>
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
            Why Food Lovers <span className="font-serif-luxe italic font-bold text-premium-gold">Choose Wraps Zone</span>
          </h2>
          
          <p className="text-sm text-charcoal/60 mt-3 font-sans">
            We operate under standard culinary benchmarks to deliver incredible taste, sanitation, and affordability under one roof.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((f, i) => (
            <motion.div
              key={f.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-premium-gold/15 p-8 rounded-[4px] hover:border-premium-gold/40 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-[4px] bg-premium-gold/10 text-premium-gold flex items-center justify-center mb-6 group-hover:bg-premium-gold group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>

              <h3 className="font-serif text-lg font-bold text-charcoal tracking-tight group-hover:text-premium-gold transition-colors duration-300 mb-2">
                {f.title}
              </h3>

              <p className="text-xs leading-relaxed text-charcoal/65 font-sans">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
