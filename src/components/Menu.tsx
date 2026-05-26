import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingCart, CheckCircle, Leaf, Sparkles, Filter } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data';

interface MenuProps {
  onAddToOrder: (item: MenuItem) => void;
}

export default function Menu({ onAddToOrder }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  // Filter items based on active inputs
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiet = dietaryFilter === 'all' ||
                          (dietaryFilter === 'veg' && item.isVeg) ||
                          (dietaryFilter === 'non-veg' && !item.isVeg);
      
      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white relative">
      
      {/* Decorative side shape */}
      <div className="absolute top-20 right-0 w-24 h-48 bg-gradient-to-l from-premium-gold/5 to-transparent rounded-l-full blur-xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-premium-gold"></span>
            <span className="text-xs tracking-[0.2em] font-poppins-luxe font-semibold uppercase text-premium-gold">
              Signature Catalog
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-premium-gold"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
            Discover Our <span className="font-serif-luxe italic font-light text-premium-gold font-glow-premium-gold">Deluxe Menu</span>
          </h2>
          
          <p className="text-sm text-charcoal/60 mt-3 font-sans leading-relaxed">
            From our golden pressure-crisped broast to signature wraps packed with spices, enjoy authentic flavors crafted for your immediate dining satisfaction.
          </p>
        </div>

        {/* Inputs Control Bar (Search, Category, Dietary preference) */}
        <div className="bg-white border border-premium-gold/15 rounded-[4px] p-4 sm:p-6 mb-12 shadow-xs">
          <div className="grid md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input Box */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-charcoal/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search wraps, broast, noodles..."
                className="w-full pl-11 pr-4 py-3 rounded-[4px] border border-premium-gold/15 bg-[#FAF9F6] text-sm text-charcoal focus:outline-hidden focus:border-premium-gold focus:bg-white transition-colors duration-300 shadow-xs placeholder-charcoal/40"
              />
            </div>

            {/* Categorization chips (Only shown here as generic menu items scroll wrap on smaller viewports) */}
            <div className="md:col-span-5 flex overflow-x-auto pb-1 md:pb-0 gap-2 no-scrollbar">
              <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest self-center hidden lg:inline mr-2 flex-shrink-0">
                Filter:
              </span>
              
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3.5 py-1.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider font-poppins-luxe cursor-pointer transition-all duration-300 ${
                  dietaryFilter === 'all'
                    ? 'bg-charcoal text-white'
                    : 'bg-[#FAF9F6] hover:bg-white text-charcoal/70 border border-premium-gold/15'
                }`}
              >
                All
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3.5 py-1.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider font-poppins-luxe flex items-center gap-1.5 cursor-pointer transition-all duration-300 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-100'
                }`}
              >
                <Leaf className="w-3 h-3 fill-white/10" />
                Veg
              </button>

              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3.5 py-1.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider font-poppins-luxe cursor-pointer transition-all duration-300 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-red-600 text-white'
                    : 'bg-white hover:bg-red-50 text-red-800 border border-red-100'
                }`}
              >
                Non-Veg
              </button>
            </div>

            {/* Helper metrics */}
            <div className="md:col-span-3 text-right text-xs font-mono text-charcoal/50 uppercase tracking-wide">
              Found <span className="font-bold text-premium-gold">{filteredItems.length}</span> delicacies
            </div>

          </div>
        </div>

        {/* Categories Chips Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto max-w-4xl mx-auto py-1">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-[4px] text-[10px] font-bold tracking-widest uppercase font-poppins-luxe border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-premium-gold border-premium-gold text-white shadow-xs'
                  : 'bg-white hover:bg-[#FAF9F6] border-premium-gold/15 text-charcoal/70 hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid Catalog */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[4px] border border-premium-gold/15 hover:border-premium-gold/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Photo Container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-white rounded-t-[4px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                    />
                    
                    {/* Tiny indicators (Veg/NonVeg badge) */}
                    <div className="absolute top-3 left-3 z-10 flex gap-1.5 items-center">
                      <span className={`w-5 h-5 rounded-[2px] border flex items-center justify-center text-[10px] font-bold ${
                        item.isVeg ? 'bg-emerald-50 border-emerald-300 text-emerald-600' : 'bg-red-50 border-red-300 text-red-600'
                      }`} title={item.isVeg ? 'Vegetarian' : 'Contains Poultry/Meat'}>
                        {item.isVeg ? 'V' : 'NV'}
                      </span>
                      {item.isBestSeller && (
                        <span className="bg-premium-gold text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-[2px] tracking-wider flex items-center gap-1 shadow-sm">
                          <Sparkles className="w-2.5 h-2.5" />
                          Top Item
                        </span>
                      )}
                    </div>

                    {/* Prepping time */}
                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[10px] font-medium text-charcoal px-2 py-0.5 rounded-[2px] border border-premium-gold/10">
                      ≈ {item.prepTime || '10 mins'}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    
                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-premium-gold bg-[#FAF9F6] border border-premium-gold/10 px-2 py-0.5 rounded-[2px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="font-serif text-base font-bold text-charcoal tracking-tight group-hover:text-premium-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    <p className="text-xs text-charcoal/70 leading-relaxed font-sans mt-2.5 line-clamp-3">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Feet footer */}
                <div className="p-5 pt-3 border-t border-premium-gold/5 flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] text-charcoal/40 font-mono">INR</span>
                    <span className="font-serif text-lg font-bold text-premium-gold">₹{item.price}</span>
                  </div>

                  <button
                    onClick={() => onAddToOrder(item)}
                    className="px-4 py-2 rounded-[4px] bg-[#FAF9F6] border border-premium-gold/15 hover:border-premium-gold hover:bg-premium-gold text-charcoal hover:text-white text-[10px] font-bold uppercase tracking-widest font-poppins-luxe transition-all duration-300 flex items-center gap-2 cursor-pointer transform active:scale-95 shadow-sm"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Place Order
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white border border-dashed border-premium-gold/20 rounded-[4px] max-w-xl mx-auto"
          >
            <p className="text-sm font-sans text-charcoal/60">
              No gourmet items match your search criteria. Try filtering by another category or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 btn-premium-primary"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
