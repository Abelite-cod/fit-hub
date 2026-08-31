'use client';

import { useState } from 'react';
import { ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/data/products';

export function AddToCartSection({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Sizes */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-3">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 text-sm font-medium border transition-colors ${
                  selectedSize === size
                    ? 'border-az-green bg-az-green text-white'
                    : 'border-white/20 text-az-offwhite/70 hover:border-white/50'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-3">Quantity</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 border border-white/20 text-az-offwhite flex items-center justify-center hover:border-white/50 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="text-az-offwhite font-semibold w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 border border-white/20 text-az-offwhite flex items-center justify-center hover:border-white/50 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className={`w-full flex items-center justify-center gap-3 text-sm font-semibold tracking-widest uppercase py-4 transition-all duration-300 ${
          added
            ? 'bg-az-green-deep text-az-green border border-az-green'
            : 'bg-az-green text-white hover:bg-az-green-deep'
        }`}
      >
        {added ? (
          <><Check size={16} /> Added to Cart</>
        ) : (
          <><ShoppingBag size={16} /> Add to Cart</>
        )}
      </button>
    </div>
  );
}
