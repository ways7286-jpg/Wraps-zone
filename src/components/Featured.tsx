import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Info, Flame } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface FeaturedProps {
  onAddToOrder: (item: MenuItem) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Featured({ onAddToOrder, onScrollToSection }: FeaturedProps) {
  // Filter for the requested featured items:
  // - Crispy Chicken Wrap
  // - BBQ Chicken Wrap
  // - Cheese Chicken Wrap
  // - Dragon Chicken
  // - Broast Chicken ("3 Pcs Spicy Broast Chicken")
  // - Blue Lagoon Mojito
  const featuredNames = [
    'Crispy Chicken Wrap',
    'BBQ Chicken Wrap',
    'Cheese Chicken Wrap',
    'Authentic Dragon Chicken',
    '3 Pcs Spicy Broast Chicken',
    'Blue Lagoon Mojito'
  ];

  const featuredItems = MENU_ITEMS.filter(item => featuredNames.includes(item.name));

  return (
    <section id="best-sellers" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
              <span className="text-xs tracking-[0.2em] font-poppins-luxe font-bold uppercase text-premium-gold">
                Highly Recommended
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
              Our Curated <span className="font-serif-luxe italic font-light text-premium-gold">Best Sellers</span>
            </h2>
            <p className="text-sm text-charcoal/60 mt-2 font-sans max-w-md">
              Hand-picked culinary highlights beloved by Hyderabad’s premium food lovers. Prepared fresh upon every order.
            </p>
          </div>

          <button
            onClick={() => onScrollToSection('menu')}
            className="btn-premium-secondary self-start md:self-auto"
          >
            Explore Full Menu
          </button>
        </div>

        {/* Premium Grid Showcase */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-[4px] overflow-hidden border border-premium-gold/15 hover:border-premium-gold/40 shadow-xs hover:shadow-md transition-all duration-500 relative flex flex-col justify-between"
            >
              <div>
                
                {/* Product Image & Badges */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Glowing Best Seller Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-premium-gold/90 backdrop-blur-xs text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-[4px] shadow-sm">
                    <Flame className="w-3 h-3 fill-white animate-pulse" />
                    Bestseller
                  </div>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-xs text-charcoal text-[11px] font-bold px-2.5 py-1 rounded-[4px] shadow-sm border border-premium-gold/10">
                    <Star className="w-3.5 h-3.5 fill-premium-gold text-premium-gold" />
                    {item.rating}
                  </div>
                </div>

                {/* Card Content Description */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-premium-gold font-poppins-luxe">
                      {item.category === 'wraps' ? 'Wrap' : item.category === 'broast' ? 'Crispy Broast' : item.category === 'mojitos' ? 'Mocktail' : 'House Special'}
                    </span>
                    <span className="text-[10px] text-charcoal/40 font-mono flex items-center gap-1 uppercase tracking-wide">
                      Prep: {item.prepTime || '10 mins'}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-charcoal tracking-tight group-hover:text-premium-gold transition-colors duration-300">
                    {item.name}
                  </h3>

                  <p className="text-xs text-charcoal/65 leading-relaxed font-sans mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Pricing and cart add section */}
              <div className="p-6 pt-0 border-t border-premium-gold/5 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] text-charcoal/40 uppercase tracking-widest leading-none font-semibold">Price</span>
                  <span className="font-serif text-xl font-bold text-premium-gold mt-1">₹{item.price}</span>
                </div>

                <button
                  onClick={() => onAddToOrder(item)}
                  className="px-4 py-2.5 rounded-[4px] bg-charcoal hover:bg-premium-gold text-white text-[10px] tracking-widest uppercase font-semibold font-poppins-luxe transition-all duration-300 flex items-center gap-2 cursor-pointer transform active:scale-95"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Order Now
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
