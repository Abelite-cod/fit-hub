import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { trainers } from '@/data/trainers';
import { businessInfo } from '@/data/businessInfo';

export const metadata: Metadata = {
  title: 'Boxing Training | AZ Fitness — Ile-Ife',
  description:
    'Boxing training at AZ Fitness in Ile-Ife, Osun State. Real technique, serious conditioning, and coaching that builds fundamentals — for beginners and experienced alike.',
};

const boxingElements = [
  { title: 'Stance & Footwork', desc: 'Build a solid foundation with proper boxing stance and footwork drills.' },
  { title: 'Punch Technique', desc: 'Jab, cross, hook, and uppercut — learn and drill the fundamentals of striking.' },
  { title: 'Defensive Movement', desc: 'Head movement, slips, and blocks to develop all-round boxing skills.' },
  { title: 'Pad Work', desc: 'Trainer-led pad sessions to sharpen combinations, timing, and accuracy.' },
  { title: 'Bag Work', desc: 'Heavy bag and speed bag work to build power, rhythm, and conditioning.' },
  { title: 'Conditioning Rounds', desc: 'Boxing-specific cardio and conditioning to build serious fitness.' },
  { title: 'Sparring', desc: 'Fitness-focused sparring in a controlled, safe environment (for those ready).' },
];

const whoItsFor = [
  {
    title: 'BEGINNERS',
    subtitle: 'Starting from zero',
    desc: 'Never boxed before? We start from the fundamentals — stance, footwork, basic punches. No experience needed. You will be coached properly from day one.',
  },
  {
    title: 'FITNESS-FOCUSED',
    subtitle: 'Train like a boxer',
    desc: "Use boxing as a workout. It's one of the toughest cardio and conditioning formats available. Serious calorie burn, improved coordination, and real fitness gains.",
  },
  {
    title: 'DEVELOPING FIGHTERS',
    subtitle: 'Sharpen your skills',
    desc: 'Build on existing skills with technical coaching and conditioning work. Work with a coach who understands the sport and can take your game to the next level.',
  },
];

const boxingCoach = trainers[1];

export default function BoxingPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1920&q=80"
            alt="Boxing training at AZ Fitness"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">BOXING AT AZ FITNESS</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              DISCIPLINE.
              <br />
              TECHNIQUE.
              <br />
              <span className="text-az-green">CONDITIONING.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              Boxing training at AZ Fitness is real — proper technique, serious conditioning, and
              coaching that builds fundamentals.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/book?service=boxing" size="lg">
                Get Started
              </Button>
              <Button href={businessInfo.contact.whatsappLink} external variant="ghost" size="lg">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT BOXING INCLUDES ────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="WHAT YOU'LL TRAIN"
            title="WHAT BOXING TRAINING INCLUDES"
            subtitle="Every session at AZ Fitness covers the core elements of boxing — not just fitness, but real boxing development."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boxingElements.map((el, i) => (
              <div
                key={el.title}
                className="flex items-start gap-5 bg-az-black border border-white/10 p-6 hover:border-az-green/30 transition-colors"
              >
                <div className="w-10 h-10 bg-az-green text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-az-offwhite font-bold text-sm uppercase tracking-wide mb-1.5">
                    {el.title}
                  </h3>
                  <p className="text-az-offwhite/60 text-sm leading-relaxed">{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="WHO IS IT FOR?"
            title="BOXING FOR EVERY LEVEL"
            subtitle="Whether you've never thrown a punch or you're looking to sharpen existing skills, AZ Fitness boxing training has a place for you."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoItsFor.map((card) => (
              <div
                key={card.title}
                className="bg-az-charcoal border border-white/10 p-8 hover:border-az-green/40 transition-colors"
              >
                <div className="w-12 h-1 bg-az-green mb-6" />
                <p className="label-text mb-1">{card.subtitle}</p>
                <h3 className="heading-sm text-az-offwhite mb-4">{card.title}</h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE COACH ───────────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <p className="label-text mb-10">THE COACHING</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <div className="relative aspect-[4/5] overflow-hidden max-w-md">
              <Image
                src={boxingCoach.image}
                alt={boxingCoach.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/60 to-transparent" />
            </div>
            {/* Info */}
            <div>
              <h2 className="heading-md text-az-offwhite mb-1">{boxingCoach.name}</h2>
              <p className="label-text mb-6">{boxingCoach.role}</p>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-6">{boxingCoach.bio}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {boxingCoach.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs border border-az-green/30 text-az-green px-3 py-1.5 uppercase tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  'Proper technique coaching from the ground up',
                  'Conditioning programmes for boxing fitness',
                  'Safe, structured progression for all levels',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check size={14} className="text-az-green flex-shrink-0 mt-0.5" />
                    <span className="text-az-offwhite/60 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCHEDULE ────────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="CURRENT SESSIONS"
            title="BOXING SCHEDULE"
            subtitle="Contact us for the most up-to-date boxing session times."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {[
              { slot: 'Morning Sessions', time: 'Contact for current schedule', days: 'Mon – Sat' },
              { slot: 'Evening Sessions', time: 'Contact for current schedule', days: 'Mon – Fri' },
            ].map((session) => (
              <div
                key={session.slot}
                className="bg-az-charcoal border border-white/10 p-6"
              >
                <h3 className="text-az-offwhite font-bold text-sm uppercase tracking-wide mb-3">
                  {session.slot}
                </h3>
                <p className="text-az-green text-sm font-semibold tracking-wide mb-1">
                  {session.time}
                </p>
                <p className="text-az-offwhite/50 text-xs uppercase tracking-wider">
                  {session.days}
                </p>
              </div>
            ))}
          </div>
          <p className="text-az-offwhite/40 text-sm mt-6">
            Session times may vary. Get in touch to confirm current availability.
          </p>
        </div>
      </section>

      {/* ─── ENQUIRY CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-24">
        <div className="container-wide">
          <div className="border border-white/10 p-10 lg:p-16 text-center">
            <p className="label-text mb-4">INTERESTED IN BOXING TRAINING?</p>
            <h2 className="heading-lg text-az-offwhite mb-6">
              READY TO STEP INTO
              <br />
              <span className="text-az-green">THE BOXING GYM?</span>
            </h2>
            <p className="body-lg text-az-offwhite/60 max-w-xl mx-auto mb-10">
              Come in, speak to the team, and find out what boxing training at AZ Fitness looks
              like. No experience required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/book?service=boxing" size="lg">
                Book a Session
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                href={businessInfo.contact.whatsappLink}
                external
                variant="outline"
                size="lg"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
