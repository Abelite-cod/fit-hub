import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { businessInfo } from '@/data/businessInfo';

export const metadata: Metadata = {
  title: 'Tennis Court | AZ Fitness — Free Recreational Tennis for Members',
  description:
    'AZ Fitness members enjoy free access to our recreational tennis court in Ile-Ife. No extra cost, no professional coaching — just a great court available to all members.',
};

const accessSteps = [
  {
    number: '01',
    title: 'BE A MEMBER',
    desc: 'The tennis court is free for all AZ Fitness members — no extra subscription, no separate fee. If you have a gym membership, the court is yours to use.',
  },
  {
    number: '02',
    title: 'BOOK AT RECEPTION',
    desc: 'Let us know when you want to play and we will sort out the court time. Just walk in or give us a call — no complicated booking system.',
  },
  {
    number: '03',
    title: 'BRING A PARTNER',
    desc: "You'll need someone to play with. Bring a friend, a family member, or a fellow AZ Fitness member. The court is yours for recreational play.",
  },
];

const courtDetails = [
  { label: 'COURT TYPE', value: 'Hard court (recreational)', note: 'Contact us for current specifications' },
  { label: 'AVAILABLE HOURS', value: 'During gym opening hours', note: 'Mon–Fri 7AM–7PM · Sat 7AM–12PM' },
  { label: 'COST', value: 'Free', note: 'Included in all AZ Fitness memberships' },
  { label: 'BOOKING', value: 'At reception', note: 'Walk in or call ahead to reserve your slot' },
];

export default function TennisPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&q=80"
            alt="Tennis court at AZ Fitness"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">MEMBER RECREATION</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              TAKE IT TO
              <br />
              <span className="text-az-green">THE COURT.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              A recreational tennis court — free for all AZ Fitness members. Great for a workout,
              a game with a friend, or just a change of pace.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/book" size="lg">
                Join AZ Fitness
              </Button>
              <Button href="#how-to-access" variant="ghost" size="lg">
                How to Access
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE COURT ─────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="label-text mb-4">THE TENNIS COURT AT AZ FITNESS</p>
              <h2 className="heading-lg text-az-offwhite mb-0">
                SIMPLE.
                <br />
                <span className="text-az-green">FREE. YOURS.</span>
              </h2>
            </div>
            <div>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-6">
                Our tennis court is available to all members at no extra cost. Whether you play
                regularly or just want to mix things up, the court is there for you.
              </p>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-6">
                This is recreational tennis — a benefit of your AZ Fitness membership. It&apos;s
                a great way to stay active, have fun, and get in a different kind of workout
                alongside your regular training.
              </p>
              <div className="bg-az-black border border-white/10 p-5 mt-4">
                <p className="text-az-offwhite/50 text-xs uppercase tracking-widest font-semibold mb-2">
                  Please Note
                </p>
                <p className="text-az-offwhite/60 text-sm leading-relaxed">
                  The tennis court is a recreational member benefit — not a professional tennis
                  coaching service. AZ Fitness does not offer tennis coaching or tennis-specific
                  memberships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW TO ACCESS ───────────────────────────────────────────────────── */}
      <section id="how-to-access" className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="USING THE COURT"
            title="HOW TO ACCESS THE TENNIS COURT"
            subtitle="Three simple steps to get on the court."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {accessSteps.map((step) => (
              <div
                key={step.number}
                className="bg-az-charcoal border border-white/10 p-8 text-center hover:border-az-green/30 transition-colors"
              >
                <span className="text-5xl font-black text-az-green/30 block mb-4 leading-none">
                  {step.number}
                </span>
                <h3 className="heading-sm text-az-offwhite mb-4">{step.title}</h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAILS STRIP ───────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-16">
        <div className="container-wide">
          <p className="label-text mb-8">COURT DETAILS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courtDetails.map((detail) => (
              <div
                key={detail.label}
                className="bg-az-black border border-white/10 p-6 hover:border-az-green/20 transition-colors"
              >
                <p className="label-text mb-3">{detail.label}</p>
                <p className="text-az-offwhite font-bold text-lg mb-1">{detail.value}</p>
                <p className="text-az-offwhite/40 text-xs leading-relaxed">{detail.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMAGE SECTION ───────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop"
                alt="Tennis court recreational play"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/40 to-transparent" />
            </div>
            <div>
              <p className="label-text mb-4">WHY IT MATTERS</p>
              <h2 className="heading-md text-az-offwhite mb-5">
                A DIFFERENT KIND OF WORKOUT
              </h2>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-4">
                Tennis is great exercise — it works your whole body, improves your footwork,
                sharpens your reflexes, and gives you a competitive workout that doesn&apos;t
                feel like a workout.
              </p>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-6">
                Having the court available as part of your AZ Fitness membership means you can
                mix up your training, bring a partner for a game, and stay active in a way
                that&apos;s fun.
              </p>
              <div className="space-y-3">
                {[
                  'Great cardio and full-body workout',
                  'Available to all members at no extra cost',
                  'Use it alongside your regular training',
                  'Court time bookable at reception',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <Check size={14} className="text-az-green flex-shrink-0" />
                    <span className="text-az-offwhite/70 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOT A MEMBER YET ────────────────────────────────────────────────── */}
      <section className="bg-az-green section-padding py-20">
        <div className="container-wide text-center">
          <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">
            NOT A MEMBER YET?
          </p>
          <h2 className="heading-lg text-white mb-6">
            JOIN AZ FITNESS.
            <br />
            USE THE COURT.
          </h2>
          <p className="text-white/80 body-lg max-w-xl mx-auto mb-10">
            Join AZ Fitness and enjoy full gym access plus free tennis court use. All included in
            your membership.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/book" variant="secondary" size="lg">
              Join Now
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              href={businessInfo.contact.whatsappLink}
              external
              variant="ghost"
              size="lg"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
