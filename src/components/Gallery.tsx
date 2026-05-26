import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'wrap' | 'broast' | 'burger' | 'mojito' | 'chinese' | 'ambience'>('all');
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ image: string; title: string } | null>(null);

  const filterTabs: { id: typeof selectedFilter; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'wrap', label: 'Wraps' },
    { id: 'broast', label: 'Broast' },
    { id: 'burger', label: 'Burgers' },
    { id: 'mojito', label: 'Mojitos' },
    { id: 'chinese', label: 'Chinese' },
    { id: 'ambience', label: 'Ambience' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    return selectedFilter === 'all' || item.category === selectedFilter;
  });

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white overflow-hidden relative border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
            <span className="text-xs tracking-[0.2em] font-poppins-luxe font-bold uppercase text-premium-gold">
              Visual Highlights
            </span>
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
            Our Luxury <span className="font-serif-luxe italic font-bold text-premium-gold">Culinary Gallery</span>
          </h2>
          
          <p className="text-sm text-charcoal/60 mt-3 font-sans">
            Feast your eyes with raw snapshots of fresh assembly, crispy pressure-cooked frying, layered mojitos, and our premium dining atmosphere in Erragadda.
          </p>
        </div>

        {/* Categories navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto max-w-2xl mx-auto py-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-[4px] text-[10px] font-bold tracking-widest uppercase font-poppins-luxe transition-all duration-300 cursor-pointer border ${
                selectedFilter === tab.id
                  ? 'bg-charcoal text-white border-charcoal shadow-sm'
                  : 'bg-[#FAF9F6] hover:bg-white text-charcoal/70 hover:text-charcoal border-premium-gold/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid with Hover Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[4px] overflow-hidden aspect-4/3 bg-[#FAF9F6] cursor-pointer shadow-xs hover:shadow-md border border-premium-gold/15"
                onClick={() => setActiveLightboxImg({ image: item.image, title: item.title })}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-premium-gold font-poppins-luxe mb-1 block">
                      {item.category.toUpperCase()} • GALLERY
                    </span>
                    <h4 className="text-white font-serif text-lg font-bold tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Corner Zoom icon button */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-[4px] bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen cinematic Lightbox modal */}
        <AnimatePresence>
          {activeLightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveLightboxImg(null)}
            >
              <div 
                className="relative max-w-4xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Upper control layout */}
                <div className="w-full text-white flex justify-between items-center mb-4">
                  <span className="font-serif text-lg font-bold">{activeLightboxImg.title}</span>
                  <button
                    onClick={() => setActiveLightboxImg(null)}
                    className="p-1.5 rounded-[4px] bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Centered Image frame */}
                <div className="w-full aspect-[16/10] rounded-[4px] overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <img
                    src={activeLightboxImg.image}
                    alt={activeLightboxImg.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Subtitle tag */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-white/40 tracking-wider">Wraps Zone • Hyderabad Premium Dining Experience</span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
