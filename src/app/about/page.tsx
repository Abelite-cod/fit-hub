import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import { trainers } from '@/data/trainers';

export const metadata: Metadata = {
  title: 'About AZ Fitness | Built for Ile-Ife',
  description:
    'AZ Fitness started with a simple idea: Ile-Ife deserves a real gym. Learn about our story, our team, and what we offer at AZ Fitness in Osun State, Nigeria.',
};

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
            alt="AZ Fitness gym"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">OUR STORY</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              BUILT FOR
              <br />
              <span className="text-az-green">ILE-IFE.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              AZ Fitness started with a simple idea: Ile-Ife deserves a real gym. A place where
              people can train properly, get proper guidance, and show up consistently.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─────────────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Quote */}
            <div>
              <p className="label-text mb-6">OUR MISSION</p>
              <blockquote className="heading-md text-az-offwhite leading-tight mb-0">
                &ldquo;GOOD TRAINING STARTS WITH{' '}
                <span className="text-az-green">CONSISTENCY.</span>&rdquo;
              </blockquote>
            </div>
            {/* Right: Body */}
            <div>
              <p className="body-lg text-az-offwhite/70 leading-relaxed">
                AZ Fitness is not about quick fixes or flashy promises. We&apos;re here to help
                you build real fitness — through structured training, proper guidance, and a
                community that keeps you accountable.
              </p>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mt-4">
                Whether you&apos;ve trained for years or you&apos;re starting fresh, this is a
                place where the work gets done.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'No shortcuts — structured programmes that deliver results',
                  'Expert trainers who coach with purpose',
                  'A gym environment that takes training seriously',
                  'Open to all levels — beginner to experienced',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-az-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-az-green" />
                    </div>
                    <p className="text-az-offwhite/70 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER ───────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="WHAT WE OFFER"
            title="EVERYTHING UNDER ONE ROOF"
            subtitle="From strength and conditioning to boxing, personal training, group classes, nutrition, and a free tennis court — AZ Fitness has what you need."
            align="center"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-az-charcoal border border-white/10 p-5 hover:border-az-green/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <h3 className="text-az-offwhite font-bold text-sm uppercase tracking-wide mb-2 group-hover:text-az-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-az-offwhite/50 text-xs leading-relaxed mb-3">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-az-green tracking-wider uppercase">
                  Learn More <ChevronRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRAINERS ────────────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="THE TEAM"
            title="COACHED BY PEOPLE WHO KNOW WHAT THEY'RE DOING"
            subtitle="Our trainers bring real experience and practical knowledge to every session."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-az-black border border-white/10 overflow-hidden group"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
                </div>
                {/* Info */}
                <div className="p-6">
                  <h3 className="text-az-offwhite font-black text-lg uppercase tracking-wide mb-1">
                    {trainer.name}
                  </h3>
                  <p className="label-text mb-4">{trainer.role}</p>
                  <p className="text-az-offwhite/60 text-sm leading-relaxed mb-4">
                    {trainer.bio}
                  </p>
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-xs border border-az-green/30 text-az-green px-2 py-1 uppercase tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ───────────────────────────────────────────────────────── */}
      <section className="bg-az-green section-padding py-16 lg:py-20">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-2">
                READY TO START?
              </p>
              <h2 className="heading-md text-white">
                COME IN AND TELL US YOUR GOALS.
              </h2>
              <p className="text-white/80 body-md mt-3 max-w-xl">
                Come in, tell us your goals, and we&apos;ll help you find the right training.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href="/book" variant="secondary" size="lg">
                JOIN AZ FITNESS
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
