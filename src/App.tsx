import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { MenuItem, CartItem } from './types';
import { MessageSquare, ShoppingBag, ArrowUp, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [alertBanner, setAlertBanner] = useState<string | null>(null);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('wrapszone_cart');
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error hydrating cart', e);
    }

    const handleScrollButton = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScrollButton);
    return () => window.removeEventListener('scroll', handleScrollButton);
  }, []);

  // Persist cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('wrapszone_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error storing cart', e);
    }
  }, [cart]);

  // Cart operations
  const handleAddToOrder = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.menuItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.menuItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { menuItem: item, quantity: 1, selectedNotes: '' }];
    });

    // Alert Banner feedback trigger
    setAlertBanner(`✓ Added ${item.name} to your gourmet basket`);
    setTimeout(() => {
      setAlertBanner(null);
    }, 2800);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.menuItem.id === itemId
          ? { ...cartItem, quantity: newQty }
          : cartItem
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.menuItem.id !== itemId));
  };

  const handleAddSpecialNotes = (itemId: string, notes: string) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.menuItem.id === itemId
          ? { ...cartItem, selectedNotes: notes }
          : cartItem
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Safe section router
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const totalCartQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-white">
      
      {/* Upper Alerts HUD notification bar */}
      <AnimatePresence>
        {alertBanner && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-charcoal text-white px-5 py-3 rounded-full shadow-2xl border border-premium-gold/30 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-poppins-luxe"
          >
            <div className="w-4.5 h-4.5 rounded-full bg-premium-gold text-white flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            {alertBanner}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glassmorphism Header */}
      <Navbar
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Single Page Sections Array */}
      <main>
        {/* Hero Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* About Section */}
        <About />

        {/* Featured Best Sellers Section */}
        <Featured
          onAddToOrder={handleAddToOrder}
          onScrollToSection={handleScrollToSection}
        />

        {/* Dynamic Catalog Section */}
        <Menu onAddToOrder={handleAddToOrder} />

        {/* Why Choose Us Features */}
        <WhyChooseUs />

        {/* Cinematic Gallery Section */}
        <Gallery />

        {/* Testimonials Review Cards */}
        <Reviews />

        {/* Geographics Map and Contacts Card */}
        <Contact />
      </main>

      {/* Footer Navigation credits */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Interactive Cart panel Slide drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddSpecialNotes={handleAddSpecialNotes}
        onClearCart={handleClearCart}
      />

      {/* FLOATING ACTION UTILITIES */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* Floating WhatsApp Action Widget */}
        <a
          href="https://wa.me/919866728123?text=Hello%20Wraps%20Zone!%20I'd%20like%20to%20view%20your%20gourmet%20pricing%20and%20order%20premium%2520meals."
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:rotate-3 cursor-pointer group"
          title="Direct WhatsApp Order Line"
        >
          <MessageSquare className="w-6 h-6 fill-white/10 group-hover:scale-110 transition-transform" />
          <span className="absolute right-14 bg-white text-charcoal border border-beige/60 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat &amp; Order Live
          </span>
        </a>

        {/* Scroll To Top widget */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-13 h-13 rounded-full bg-white text-charcoal border border-beige hover:border-premium-gold shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 transform active:scale-95 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5 text-charcoal hover:text-premium-gold transition-colors" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>

      {/* CONVERSION BAR: STICKY MOBILE LAYOUT ORDER ACTION TRIGGER */}
      <AnimatePresence>
        {totalCartQty > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-beige/80 px-4 py-3.5 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] flex items-center justify-between"
          >
            <div className="flex flex-col text-left">
              <span className="text-[9px] text-charcoal/40 uppercase tracking-widest font-mono font-semibold">
                Basket Subtotal
              </span>
              <span className="font-serif text-lg font-bold text-premium-gold">
                ₹{cartSubtotal}
                <span className="text-[10px] text-charcoal/50 font-normal font-sans ml-1">
                  ({totalCartQty} items)
                </span>
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="px-6 py-3 rounded-full bg-premium-gold text-white text-xs tracking-wider uppercase font-semibold font-poppins-luxe transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md shadow-premium-gold/15"
            >
              <ShoppingBag className="w-4 h-4" />
              View Basket
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
