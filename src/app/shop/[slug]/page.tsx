import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { AddToCartSection } from './AddToCartSection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <div className="bg-az-black pt-28 section-padding">
        <div className="container-wide">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-az-offwhite/50 hover:text-az-offwhite transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-az-black pb-20 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <div className="relative aspect-[3/4] bg-az-charcoal">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="label-text mb-3">
                {product.category === 'gym-wear' ? 'Gym Wear' : product.category === 'equipment' ? 'Equipment' : 'Accessories'}
              </p>
              <h1 className="heading-md text-az-offwhite mb-4">{product.name}</h1>
              <p className="text-3xl font-black text-az-green mb-6">{product.price}</p>
              <p className="text-az-offwhite/70 leading-relaxed mb-8">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-az-offwhite/60">
                    <span className="w-1.5 h-1.5 bg-az-green rounded-full flex-shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <AddToCartSection product={product} />

              <p className="mt-6 text-xs text-az-offwhite/30">
                Prices shown are placeholders. Final price confirmed at checkout. Available for in-store purchase or enquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-az-charcoal py-20 section-padding border-t border-white/10">
          <div className="container-wide">
            <p className="label-text mb-4">MORE FROM THE STORE</p>
            <h2 className="heading-md text-az-offwhite mb-10">YOU MIGHT ALSO LIKE.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[3/4] bg-az-black overflow-hidden mb-3">
                    <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                  </div>
                  <h3 className="text-sm font-semibold text-az-offwhite group-hover:text-az-green transition-colors leading-snug mb-1">{p.name}</h3>
                  <p className="text-az-green text-sm font-bold">{p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
