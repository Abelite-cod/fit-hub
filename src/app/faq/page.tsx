'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/faqs';
import Link from 'next/link';

const categoryOrder = ['General', 'Memberships', 'Training', 'Facilities', 'Wellness', 'Shop'];

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: faqs.filter((f) => f.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-az-black pt-32 pb-16 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">AZ FITNESS</p>
          <h1 className="heading-xl text-az-offwhite mb-6 max-w-2xl">FREQUENTLY ASKED QUESTIONS.</h1>
          <p className="body-lg text-az-offwhite/70 max-w-xl">
            Everything you need to know about training at AZ Fitness. Can't find your answer? Get in touch.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-az-charcoal py-20 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar nav */}
            <nav className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-24 space-y-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-az-offwhite/30 mb-4">Categories</p>
                {grouped.map((g) => (
                  <a
                    key={g.category}
                    href={`#faq-${g.category.toLowerCase()}`}
                    className="block text-sm text-az-offwhite/60 hover:text-az-green transition-colors py-1.5"
                  >
                    {g.category}
                  </a>
                ))}
              </div>
            </nav>

            {/* FAQ Accordions */}
            <div className="lg:col-span-9 space-y-12">
              {grouped.map((group) => (
                <div key={group.category} id={`faq-${group.category.toLowerCase()}`}>
                  <p className="label-text mb-6">{group.category}</p>
                  <div className="space-y-0">
                    {group.items.map((faq) => (
                      <div key={faq.id} className="border-b border-white/10">
                        <button
                          onClick={() => toggle(faq.id)}
                          className="w-full flex items-center justify-between gap-4 py-5 text-left"
                          aria-expanded={openId === faq.id}
                        >
                          <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${openId === faq.id ? 'text-az-green' : 'text-az-offwhite'}`}>
                            {faq.question}
                          </span>
                          <span className="flex-shrink-0 text-az-offwhite/40">
                            {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                          </span>
                        </button>
                        {openId === faq.id && (
                          <div className="pb-5">
                            <p className="text-az-offwhite/60 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-az-green-deep py-16 section-padding">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="heading-md text-az-offwhite mb-2">STILL HAVE QUESTIONS?</h2>
              <p className="text-az-offwhite/60 text-sm">Get in touch and we'll answer whatever you need to know.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center bg-az-green text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-az-black transition-colors">
                Contact Us
              </Link>
              <Link href="/book" className="inline-flex items-center justify-center border border-white/20 text-az-offwhite text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:border-white/50 transition-colors">
                Book / Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
