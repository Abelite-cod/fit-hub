'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="bg-az-black min-h-screen pt-32 section-padding">
        <div className="container-wide text-center py-20">
          <ShoppingBag size={48} className="text-az-offwhite/20 mx-auto mb-6" />
          <h1 className="heading-md text-az-offwhite mb-4">YOUR CART IS EMPTY.</h1>
          <p className="text-az-offwhite/50 mb-8">Head to the shop to add items.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-az-green text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-az-green-deep transition-colors"
          >
            Go to Shop <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-az-black min-h-screen pt-32 pb-20 section-padding">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-10">
          <h1 className="heading-lg text-az-offwhite">YOUR CART.</h1>
          <span className="text-az-offwhite/50 text-sm">{totalItems()} item{totalItems() !== 1 ? 's' : ''}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4 p-4 bg-az-charcoal border border-white/10">
                <div className="relative w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 bg-az-black">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-az-offwhite font-semibold text-sm leading-snug mb-1">{item.product.name}</h3>
                      {item.selectedSize && (
                        <p className="text-az-offwhite/40 text-xs mb-3">Size: {item.selectedSize}</p>
                      )}
                      <p className="text-az-green font-bold text-sm">{item.product.price}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-az-offwhite/30 hover:text-az-offwhite transition-colors flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 border border-white/20 text-az-offwhite flex items-center justify-center hover:border-white/50 text-sm"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-az-offwhite text-sm w-6 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 border border-white/20 text-az-offwhite flex items-center justify-center hover:border-white/50 text-sm"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end pt-4">
              <button
                onClick={clearCart}
                className="text-xs text-az-offwhite/30 hover:text-az-offwhite/60 transition-colors underline underline-offset-4"
              >
                Clear cart
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-az-charcoal border border-white/10 p-6 sticky top-24">
              <h2 className="heading-sm text-az-offwhite mb-6">ORDER SUMMARY.</h2>
              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex justify-between text-sm">
                    <span className="text-az-offwhite/60 truncate mr-2">{item.product.name} × {item.quantity}</span>
                    <span className="text-az-offwhite/80 flex-shrink-0">{item.product.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-az-offwhite font-semibold">Total</span>
                <span className="text-az-green font-black text-lg">₦XX,XXX</span>
              </div>
              <p className="text-xs text-az-offwhite/30 mb-6">Prices are placeholders. Final total confirmed at checkout.</p>
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-az-green text-white text-sm font-semibold tracking-widest uppercase py-4 hover:bg-az-green-deep transition-colors"
              >
                Proceed to Checkout <ArrowRight size={14} />
              </Link>
              <Link href="/shop" className="block text-center text-xs text-az-offwhite/40 hover:text-az-offwhite/70 transition-colors mt-4">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
