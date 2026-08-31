import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { trainers } from '@/data/trainers';

export const metadata: Metadata = {
  title: 'Personal Training | AZ Fitness — One-on-One Coaching in Ile-Ife',
  description:
    'Personal training at AZ Fitness in Ile-Ife. One-on-one coaching built entirely around your goals, schedule, and current level. Book a session today.',
};

const steps = [
  {
    number: '01',
    title: 'INITIAL ASSESSMENT',
    desc: 'We start by understanding your goals, current fitness level, training history, and any limitations. This gives your trainer the full picture before building your programme.',
  },
  {
    number: '02',
    title: 'YOUR PROGRAMME',
    desc: 'A training plan built specifically for you — not a generic template. Your programme is designed around your goals, your schedule, and what your body can handle right now.',
  },
  {
    number: '03',
    title: 'COACHED SESSIONS',
    desc: 'Your trainer works with you directly in every session. Form, technique, progression — all coached in real time. No guesswork, no wasted sets.',
  },
  {
    number: '04',
    title: 'PROGRESS & ADAPTATION',
    desc: "Your programme adapts as you improve. What worked at week one won't be what you're doing at week twelve. Consistent progression is built into the process.",
  },
];

const included = [
  'Personalised training programme',
  'One-on-one coaching every session',
  'Flexible session scheduling',
  'Progress tracking & programme updates',
  'Nutritional guidance aligned to your goals',
  'Accountability check-ins',
];

const ptTrainers = [trainers[0], trainers[2]];

export default function PersonalTrainingPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1549476464-37392f717541?w=1920&q=80"
            alt="Personal training at AZ Fitness"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">PERSONAL TRAINING</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              YOUR GOALS.
              <br />
              YOUR
              <br />
              <span className="text-az-green">PROGRAMME.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              One-on-one coaching built entirely around you — your schedule, your goals, your
              current level.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/book?service=personal-training" size="lg">
                Book a Session
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg">
                How It Works
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="THE PROCESS"
            title="HOW PERSONAL TRAINING WORKS"
            subtitle="A four-step process designed to get you real results — not a quick fix, but a structured approach to your goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-az-charcoal border border-white/10 p-8 hover:border-az-green/30 transition-colors"
              >
                <span className="text-5xl font-black text-az-green/20 block mb-4 leading-none">
                  {step.number}
                </span>
                <h3 className="heading-sm text-az-offwhite mb-3">{step.title}</h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=1000&fit=crop"
                alt="One-on-one training session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/50 to-transparent" />
            </div>
            {/* Content */}
            <div>
              <SectionHeading
                label="WHAT'S INCLUDED"
                title="EVERYTHING YOU NEED. NOTHING YOU DON'T."
                subtitle="Personal training at AZ Fitness is comprehensive — from your first assessment through to your long-term progression."
              />
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-az-green/20 border border-az-green/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-az-green" />
                    </div>
                    <span className="text-az-offwhite/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRAINERS ────────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="YOUR COACHES"
            title="TRAINERS FOR PERSONAL TRAINING"
            subtitle="Our personal trainers bring experience, knowledge, and a direct coaching style."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {ptTrainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-az-charcoal border border-white/10 overflow-hidden group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-az-offwhite font-black text-lg uppercase tracking-wide mb-1">
                    {trainer.name}
                  </h3>
                  <p className="label-text mb-4">{trainer.role}</p>
                  <p className="text-az-offwhite/60 text-sm leading-relaxed mb-4">{trainer.bio}</p>
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

      {/* ─── MEMBERSHIP CALLOUT ──────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-14">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 p-8 lg:p-10">
            <div>
              <p className="label-text mb-2">MEMBERSHIP ACCESS</p>
              <h2 className="heading-md text-az-offwhite mb-2">
                INCLUDED IN SELECT MEMBERSHIPS
              </h2>
              <p className="text-az-offwhite/60 body-md max-w-xl">
                Personal training is available as part of our Performance and Annual memberships,
                or as standalone sessions. See which option works best for you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href="/memberships" variant="outline" size="lg">
                View Memberships
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-az-green section-padding py-20">
        <div className="container-wide text-center">
          <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">
            READY TO START?
          </p>
          <h2 className="heading-lg text-white mb-6">
            READY TO TRAIN
            <br />
            WITH PURPOSE?
          </h2>
          <p className="text-white/80 body-lg max-w-xl mx-auto mb-10">
            Book a personal training session and start working toward your goals with a coach who
            is focused entirely on you.
          </p>
          <Button href="/book?service=personal-training" variant="secondary" size="lg">
            Book a Personal Training Session
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
