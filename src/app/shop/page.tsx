'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';

type Category = 'all' | 'gym-wear' | 'equipment' | 'accessories';

const categoryLabels: Record<Category, string> = {
  all: 'All Products',
  'gym-wear': 'Gym Wear',
  equipment: 'Equipment',
  accessories: 'Accessories',
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-az-black pt-32 pb-16 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">AZ FITNESS STORE</p>
          <h1 className="heading-xl text-az-offwhite mb-4">GEAR UP.</h1>
          <p className="body-lg text-az-offwhite/70 max-w-xl">
            AZ Fitness branded gym wear, training equipment, and accessories. Everything you need to train properly.
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="bg-az-charcoal border-b border-white/10 sticky top-16 z-30">
        <div className="container-wide section-padding py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 flex-wrap">
            {(Object.keys(categoryLabels) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold tracking-widest uppercase px-4 py-2 transition-colors ${
                  activeCategory === cat
                    ? 'bg-az-green text-white'
                    : 'text-az-offwhite/60 hover:text-az-offwhite border border-white/10 hover:border-white/30'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-az-offwhite/40" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-az-black border border-white/10 text-az-offwhite text-sm pl-9 pr-4 py-2 placeholder:text-az-offwhite/30 focus:outline-none focus:border-az-green"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-az-black py-16 section-padding">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-az-offwhite/40 text-lg">No products found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] bg-az-charcoal overflow-hidden mb-4">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-az-green text-white text-xs font-semibold tracking-wider uppercase px-2 py-1">Featured</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                      <span className="bg-az-green text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 flex items-center gap-2">
                        <ShoppingBag size={12} /> View Product
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-az-offwhite/40 uppercase tracking-wider mb-1">
                      {product.category === 'gym-wear' ? 'Gym Wear' : product.category === 'equipment' ? 'Equipment' : 'Accessories'}
                    </p>
                    <h3 className="text-az-offwhite text-sm font-semibold leading-snug mb-1 group-hover:text-az-green transition-colors">{product.name}</h3>
                    <p className="text-az-green font-bold text-sm">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Note section */}
      <section className="bg-az-charcoal py-12 section-padding border-t border-white/10">
        <div className="container-wide">
          <p className="text-az-offwhite/40 text-sm max-w-2xl">
            <strong className="text-az-offwhite/70">Note:</strong> To purchase, enquire via our booking form or visit us in the gym. Online checkout is being finalised. All prices shown are placeholders and will be confirmed at time of purchase.
          </p>
        </div>
      </section>
    </>
  );
}
