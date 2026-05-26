import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, Send, ShoppingBag, Landmark } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onAddSpecialNotes: (itemId: string, notes: string) => void;
  onClearCart: () => void;
}

export default function CartModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onAddSpecialNotes,
  onClearCart,
}: CartModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryCharges = subtotal > 400 ? 0 : subtotal === 0 ? 0 : 40;
  const grandTotal = subtotal + deliveryCharges;

  const handleDispatchOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Please fill out all standard customer delivery coordinates.');
      return;
    }

    // Build perfect WhatsApp checkout message template
    let messageText = `*WRAPS ZONE - HIGH END DINING CHECKOUT TICKET*\n`;
    messageText += `===============================\n`;
    messageText += `👤 *Customer Details*\n`;
    messageText += `Name: ${customerName}\n`;
    messageText += `Phone: ${customerPhone}\n`;
    messageText += `Address: ${customerAddress}\n`;
    messageText += `===============================\n`;
    messageText += `🍔 *Order Item List*\n`;

    cart.forEach((item, idx) => {
      messageText += `${idx + 1}. *${item.menuItem.name}* x ${item.quantity} (₹${item.menuItem.price * item.quantity})\n`;
      if (item.selectedNotes) {
        messageText += `   _Instruction: ${item.selectedNotes}_\n`;
      }
    });

    messageText += `===============================\n`;
    messageText += `💰 *Subtotal*: ₹${subtotal}\n`;
    messageText += `🚚 *Delivery Charges*: ₹${deliveryCharges}\n`;
    messageText += `💵 *Total Bill Amount*: *₹${grandTotal}*\n`;
    messageText += `===============================\n`;
    messageText += `Wrapped Fresh. Served Hot. Loved Always.\n`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919866728123?text=${encodedMsg}`;

    // Open WhatsApp URL in a blank window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Clear state
    onClearCart();
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black"
          />

          {/* Right Sliding Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col justify-between"
          >
            {/* Header Area */}
            <div className="bg-[#FAF9F6] px-6 py-5 border-b border-premium-gold/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-premium-gold" />
                <h3 className="font-serif text-lg font-bold text-charcoal">
                  Your Gourmet Basket
                </h3>
                <span className="bg-premium-gold/10 text-premium-gold text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-[2px] border border-premium-gold/20">
                  {cart.length} items
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-[4px] hover:bg-[#FAF9F6] hover:text-charcoal transition-colors cursor-pointer border border-transparent hover:border-premium-gold/25"
              >
                <X className="w-5 h-5 text-charcoal/60" />
              </button>
            </div>

            {/* Cart content scroll */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-16 flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-[4px] bg-[#FAF9F6] text-premium-gold/50 flex items-center justify-center border border-dashed border-premium-gold/30">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-charcoal">Your basket is empty</h4>
                    <p className="text-xs text-charcoal/40 mt-1 max-w-[250px] mx-auto">
                      Go back to our signature catalog and select standard wraps or crispy tenders to initiate dining!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="bg-[#FAF9F6] border border-premium-gold/15 p-4 rounded-[4px] flex flex-col gap-3.5 transition-all duration-300"
                    >
                      {/* Flex wrapper for main visual row */}
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-[4px] overflow-hidden shrink-0 border border-premium-gold/15 bg-white">
                          <img
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-1 text-left">
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-bold text-charcoal font-sans leading-snug">
                              {item.menuItem.name}
                            </h4>
                            <span className="font-serif text-sm font-bold text-premium-gold">
                              ₹{item.menuItem.price * item.quantity}
                            </span>
                          </div>

                          <span className="text-[10px] text-charcoal/40 font-mono block">
                            ₹{item.menuItem.price} each • Prep ≈ {item.menuItem.prepTime || '10 mins'}
                          </span>
                        </div>
                      </div>

                      {/* Controls Row (Notes & quantity edit) */}
                      <div className="flex items-center justify-between border-t border-premium-gold/5 pt-3">
                        {/* Note Input */}
                        <div className="flex-1 max-w-[190px] sm:max-w-xs">
                          <input
                            type="text"
                            value={item.selectedNotes || ''}
                            onChange={(e) => onAddSpecialNotes(item.menuItem.id, e.target.value)}
                            placeholder="Add notes: (e.g. extra cheese)"
                            className="w-full bg-white border border-premium-gold/15 px-2.5 py-1.5 rounded-[4px] text-[10px] focus:outline-hidden focus:border-premium-gold/60 transition-colors"
                          />
                        </div>

                        {/* Interactive Quantity toggles */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-premium-gold/15 bg-white rounded-[4px] overflow-hidden">
                            <button
                              onClick={() => {
                                if (item.quantity > 1) {
                                  onUpdateQuantity(item.menuItem.id, item.quantity - 1);
                                } else {
                                  onRemoveItem(item.menuItem.id);
                                }
                              }}
                              className="px-2 py-1 hover:bg-[#FAF9F6] text-charcoal/60 transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-charcoal font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-[#FAF9F6] text-charcoal/60 transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Trash button */}
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id)}
                            className="p-1.5 rounded-[4px] text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Static checkout parameters block */}
            {cart.length > 0 && (
              <div className="bg-[#FAF9F6] border-t border-premium-gold/15 p-6 space-y-6">
                
                {/* Billing Summary Columns */}
                <div className="space-y-2 border-b border-dashed border-premium-gold/20 pb-4 text-xs font-sans text-charcoal/70">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-charcoal">₹{subtotal}</span>
                  </div>



                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-charcoal">
                      {deliveryCharges === 0 ? (
                        <span className="font-bold text-emerald-600 uppercase">FREE</span>
                      ) : (
                        `₹${deliveryCharges}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-end pt-2 text-sm text-charcoal font-bold mt-1">
                    <span className="font-serif">Grand Payable Amount</span>
                    <span className="font-serif text-lg text-premium-gold leading-none">₹{grandTotal}</span>
                  </div>
                </div>

                {/* Delivery Form inputs */}
                <form onSubmit={handleDispatchOrder} className="space-y-3.5 text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/40 font-poppins-luxe mb-1">
                    Shipping & Delivery coordinates
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Full Name"
                      className="bg-white border border-premium-gold/15 px-3.5 py-2.5 rounded-[4px] text-xs text-charcoal focus:outline-hidden focus:border-premium-gold cursor-text"
                    />

                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Contact No"
                      className="bg-white border border-premium-gold/15 px-3.5 py-2.5 rounded-[4px] text-xs text-charcoal focus:outline-hidden focus:border-premium-gold cursor-text"
                    />
                  </div>

                  <input
                    type="text"
                    required
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Delivery/Apartment Address (e.g. Erragadda Block-A)"
                    className="w-full bg-white border border-premium-gold/15 px-3.5 py-2.5 rounded-[4px] text-xs text-charcoal focus:outline-hidden focus:border-premium-gold cursor-text"
                  />

                  {/* Dispatch CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-[4px] bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] tracking-widest uppercase font-bold font-poppins-luxe transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 fill-white/10" />
                    Dispatch WhatsApp Order
                  </button>
                </form>

              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
