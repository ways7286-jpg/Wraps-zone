import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, MessageSquare, ArrowRight, CornerDownRight, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate premium message delivery
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormState({ name: '', email: '', message: '' });
    }, 5000);
  };

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.158145328227!2d78.4194098495092!3d17.445831518925556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9098df4c5383%3A0xed499edec5e7f62c!2sNew%20Shashtri%20Nagar%2C%20Erragadda%2C%20Hyderabad%2C%20Telangana%20500114!5e0!3m2!1sen!2sin!4v1716765792039!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
            <span className="text-xs tracking-[0.2em] font-poppins-luxe font-bold uppercase text-premium-gold">
              Locate &amp; Reach Us
            </span>
            <span className="w-10 h-[1.5px] bg-premium-gold inline-block"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
            Visit Our Premium <span className="font-serif-luxe italic font-bold text-premium-gold">Aesthetic Cafe</span>
          </h2>
          
          <p className="text-sm text-charcoal/60 mt-3 font-sans">
            Have questions? Want to order directly? Settle down in our cozy lounge, call us instantly, or dispatch an order on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Details & Map Column */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="grid sm:grid-cols-3 gap-6">
              
              {/* Address Card */}
              <div className="bg-[#FAF9F6] border border-premium-gold/15 p-6 rounded-[4px] flex flex-col justify-between">
                <div className="w-10 h-10 rounded-[4px] bg-premium-gold/10 text-premium-gold flex items-center justify-center mb-5 shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal tracking-tight mb-2">Our Address</h4>
                  <p className="text-[11px] leading-relaxed text-charcoal/65 font-sans">
                    8-3-369, New Shastry Nagar, Sultan Bagh, Erragadda, Hyderabad, 500114
                  </p>
                </div>
              </div>

              {/* Call Card */}
              <div className="bg-[#FAF9F6] border border-premium-gold/15 p-6 rounded-[4px] flex flex-col justify-between">
                <div className="w-10 h-10 rounded-[4px] bg-premium-gold/10 text-premium-gold flex items-center justify-center mb-5 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal tracking-tight mb-2">Telephone</h4>
                  <p className="text-sm font-bold text-premium-gold font-poppins-luxe tracking-wide">
                    09866728123
                  </p>
                  <p className="text-[10px] text-charcoal/40 font-medium font-sans mt-1">Tap below to place call</p>
                </div>
              </div>

              {/* Timing Card */}
              <div className="bg-[#FAF9F6] border border-premium-gold/15 p-6 rounded-[4px] flex flex-col justify-between">
                <div className="w-10 h-10 rounded-[4px] bg-premium-gold/10 text-premium-gold flex items-center justify-center mb-5 shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal tracking-tight mb-2">Operating Hours</h4>
                  <p className="text-xs font-bold text-charcoal tracking-tight font-poppins-luxe">
                    1:00 PM – 11:00 PM
                  </p>
                  <span className="inline-flex items-center gap-1 text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-[2px] mt-1.5">
                    Open Daily
                  </span>
                </div>
              </div>

            </div>

            {/* Quick action buttons row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:09866728123"
                className="px-6 py-3 rounded-[4px] bg-charcoal text-white hover:bg-premium-gold text-xs tracking-wider font-bold font-poppins-luxe transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>

              <a
                href="https://maps.app.goo.gl/ed499edec5e7f62c"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-[4px] bg-white border border-premium-gold/15 hover:border-premium-gold text-charcoal hover:text-premium-gold text-xs tracking-wider font-bold font-poppins-luxe transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer shadow-xs"
              >
                <CornerDownRight className="w-3.5 h-3.5" />
                Get Directions
              </a>

              <a
                href="https://wa.me/919866728123?text=Hello%20Wraps%20Zone!%20I'd%20like%20to%20order%20some%20fresh%20wraps."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-[4px] bg-emerald-600 text-white hover:bg-emerald-700 text-xs tracking-wider font-bold font-poppins-luxe transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white/10" />
                WhatsApp Order
              </a>
            </div>

            {/* Embedded Google Maps Canvas */}
            <div className="w-full h-[320px] rounded-[4px] overflow-hidden shadow-xs border border-premium-gold/15 relative">
              <iframe
                title="Wraps Zone Location Map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

          {/* Luxury Contact Inquiry Form Card Column */}
          <div className="lg:col-span-5 bg-[#FAF9F6] border border-premium-gold/15 rounded-[4px] p-8 sm:p-10 relative shadow-xs">
            
            <div className="absolute top-0 right-10 -translate-y-1/2 w-8 h-8 rounded-[4px] bg-premium-gold flex items-center justify-center text-white font-serif text-sm">
              ✨
            </div>

            <h3 className="font-serif text-2xl font-bold text-charcoal tracking-tight mb-2">
              Share Your <span className="italic text-premium-gold">Inquiry</span>
            </h3>
            
            <p className="text-xs text-charcoal/50 font-sans leading-relaxed mb-6">
              Drop your contact email, and our hospitality team will connect with you under standard business intervals.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-[4px] p-6 text-center text-emerald-800"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-sm">Message Delivered Successfully!</h4>
                  <p className="text-xs text-emerald-700/80 mt-1">
                    Thank you. Our kitchen hospitality host will email you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-poppins-luxe">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Suhail Ahmed"
                      className="w-full bg-white border border-premium-gold/15 px-4 py-3 rounded-[4px] text-xs text-charcoal focus:outline-hidden focus:border-premium-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-poppins-luxe">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. suhail@example.com"
                      className="w-full bg-white border border-premium-gold/15 px-4 py-3 rounded-[4px] text-xs text-charcoal focus:outline-hidden focus:border-premium-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-poppins-luxe">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Looking for catering, hosting a birthday party or custom menu requirements?"
                      className="w-full bg-white border border-premium-gold/15 p-4 rounded-[4px] text-xs text-charcoal focus:outline-hidden focus:border-premium-gold transition-colors resize-none placeholder-charcoal/30 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-[4px] bg-premium-gold hover:bg-charcoal text-white text-[10px] tracking-widest uppercase font-bold font-poppins-luxe transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    Submit Message
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
