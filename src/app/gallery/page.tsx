'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, GalleryCategory } from '@/data/gallery';

const categories: (GalleryCategory | 'All')[] = ['All', 'The Gym', 'Training', 'Boxing', 'Tennis', 'Community', 'Gym Wear', 'Equipment'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'All'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };
  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) prevImage();
      if (e.key === 'ArrowRight' && lightboxIndex !== null) nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <>
      {/* Hero */}
      <section className="bg-az-black pt-32 pb-16 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">AZ FITNESS</p>
          <h1 className="heading-xl text-az-offwhite mb-4">GALLERY.</h1>
          <p className="body-lg text-az-offwhite/70 max-w-xl">A look inside AZ Fitness — the gym, the training, the community.</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-az-charcoal border-b border-white/10 sticky top-16 z-30">
        <div className="container-wide section-padding py-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold tracking-widest uppercase px-4 py-2 transition-colors ${
                  activeCategory === cat
                    ? 'bg-az-green text-white'
                    : 'text-az-offwhite/60 hover:text-az-offwhite border border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-az-black py-12 section-padding">
        <div className="container-wide">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 lg:gap-4 space-y-3 lg:space-y-4">
            {filtered.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index)}
                className="block w-full group break-inside-avoid"
              >
                <div className="relative overflow-hidden bg-az-charcoal">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-semibold tracking-wider uppercase text-white bg-az-green px-2 py-1">{image.category}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-10"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/50 text-sm">{filtered[lightboxIndex].alt}</p>
            <p className="text-white/30 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
