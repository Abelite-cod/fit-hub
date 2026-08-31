'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  delivery: 'pickup' | 'delivery';
  notes: string;
}

export default function CheckoutPage() {
  const { items, totalItems, clearCart } = useCartStore();
  const [form, setForm] = useState<CheckoutForm>({
    name: '', email: '', phone: '', address: '', delivery: 'pickup', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    clearCart();
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-az-black min-h-screen pt-32 section-padding">
        <div className="container-wide max-w-xl mx-auto text-center py-20">
          <div className="w-16 h-16 bg-az-green rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={32} className="text-white" />
          </div>
          <h1 className="heading-lg text-az-offwhite mb-4">ORDER RECEIVED.</h1>
          <p className="text-az-offwhite/70 mb-4 leading-relaxed">
            Thanks, {form.name}. Your order enquiry has been received. We&apos;ll be in touch on <strong className="text-az-offwhite">{form.phone || form.email}</strong> to confirm details and finalise payment.
          </p>
          <p className="text-az-offwhite/40 text-sm mb-10">This is not a confirmed payment — we&apos;ll contact you to complete your order.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-az-green text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-az-green-deep transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="bg-az-black min-h-screen pt-32 section-padding">
        <div className="container-wide text-center py-20">
          <ShoppingBag size={48} className="text-az-offwhite/20 mx-auto mb-6" />
          <h1 className="heading-md text-az-offwhite mb-4">YOUR CART IS EMPTY.</h1>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-az-green text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-az-green-deep transition-colors">
            Go to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-az-black min-h-screen pt-32 pb-20 section-padding">
      <div className="container-wide">
        <h1 className="heading-lg text-az-offwhite mb-12">CHECKOUT.</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <p className="label-text mb-6">YOUR DETAILS</p>
            {[
              { name: 'name', label: 'Full Name', type: 'text', required: true },
              { name: 'email', label: 'Email Address', type: 'email', required: true },
              { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                  {field.label} {field.required && <span className="text-az-green">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof CheckoutForm] as string}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full bg-az-charcoal border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors"
                />
              </div>
            ))}

            {/* Delivery */}
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                How would you like to receive your order? <span className="text-az-green">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'pickup', label: 'Collect in Gym', desc: 'Pick up from AZ Fitness' },
                  { value: 'delivery', label: 'Delivery', desc: "We'll discuss delivery options" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-start gap-3 p-4 border cursor-pointer transition-colors ${
                      form.delivery === opt.value ? 'border-az-green bg-az-green/10' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value={opt.value}
                      checked={form.delivery === opt.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div>
                      <p className="text-sm font-semibold text-az-offwhite">{opt.label}</p>
                      <p className="text-xs text-az-offwhite/50 mt-1">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {form.delivery === 'delivery' && (
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">Delivery Address <span className="text-az-green">*</span></label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full bg-az-charcoal border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors resize-none"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">Additional Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Any questions or notes about your order..."
                className="w-full bg-az-charcoal border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors resize-none placeholder:text-az-offwhite/20"
              />
            </div>

            <p className="text-xs text-az-offwhite/30 border-t border-white/10 pt-4">
              This is not a real payment form. Submitting this sends an order enquiry. We will contact you to confirm and arrange payment.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-az-green text-white text-sm font-semibold tracking-widest uppercase py-4 hover:bg-az-green-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Processing...' : 'Place Order Enquiry'}
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-az-charcoal border border-white/10 p-6 sticky top-24">
              <h2 className="heading-sm text-az-offwhite mb-6">YOUR ORDER.</h2>
              <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-3">
                    <div className="relative w-14 h-16 bg-az-black flex-shrink-0">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-az-offwhite leading-snug truncate">{item.product.name}</p>
                      {item.selectedSize && <p className="text-xs text-az-offwhite/40">Size: {item.selectedSize}</p>}
                      <p className="text-xs text-az-offwhite/50 mt-1">Qty: {item.quantity} × {item.product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-az-offwhite font-semibold text-sm">Estimated Total</span>
                <span className="text-az-green font-black">₦XX,XXX</span>
              </div>
              <p className="text-xs text-az-offwhite/30 mt-3">Final price confirmed when we contact you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
