import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Facilities | AZ Fitness — Gym Equipment & Facilities in Ile-Ife',
  description:
    'AZ Fitness in Ile-Ife is equipped for serious training. Weights, cardio machines, boxing area, body conditioning space, and a free recreational tennis court for members.',
};

const facilities = [
  {
    title: 'WEIGHTS & LIFTING AREA',
    desc: 'A fully equipped free weights area for strength training at all levels. Barbells, dumbbells, squat racks, benches — everything you need for serious lifting.',
    features: [
      'Olympic barbells & plates',
      'Dumbbell range',
      'Squat racks',
      'Flat & incline benches',
      'Free weight open floor space',
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
  },
  {
    title: 'CARDIO EQUIPMENT',
    desc: 'A cardio suite with machines for endurance training, warm-ups, and dedicated cardio sessions. Suitable for all fitness levels.',
    features: [
      'Treadmills',
      'Stationary bikes',
      'Cardio machines',
      'Suitable for warm-up and full sessions',
      'Heart rate monitoring available',
    ],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
  },
  {
    title: 'BOXING AREA',
    desc: 'A dedicated boxing space with punch bags, speed bags, and room for pad work. Used for our boxing training sessions and open boxing floor time.',
    features: [
      'Heavy punch bags',
      'Speed bags',
      'Boxing ring / open space',
      'Pad work area',
      'Space for footwork drills',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=400&fit=crop',
  },
  {
    title: 'BODY CONDITIONING AREA',
    desc: 'An open floor area set up for functional training, group classes, and conditioning work. Equipped with mats, kettlebells, bands, and bodyweight training tools.',
    features: [
      'Exercise mats',
      'Kettlebells',
      'Resistance bands',
      'Functional training equipment',
      'Used for group sessions & PT',
    ],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
  },
  {
    title: 'TENNIS COURT',
    desc: 'A recreational tennis court available to all AZ Fitness members at no extra cost. Great for a workout, a casual game, or a change of pace from your regular training.',
    features: [
      'Available to all members — FREE',
      'Available during gym opening hours',
      'Book at reception',
      'Recreational use only',
      'Bring a partner to play',
    ],
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop',
    highlight: true,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1920&q=80"
            alt="AZ Fitness gym facilities"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">THE FACILITIES</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              EVERYTHING YOU
              <br />
              NEED TO
              <br />
              <span className="text-az-green">TRAIN.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              AZ Fitness is equipped for serious training — weights, cardio, boxing, and a tennis
              court for member recreation.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="#facilities" size="lg">
                Explore Facilities
              </Button>
              <Button href="/book" variant="ghost" size="lg">
                Book a Visit
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACILITIES GRID ─────────────────────────────────────────────────── */}
      <section id="facilities" className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="WHAT WE HAVE"
            title="THE TRAINING SPACES"
            subtitle="Five dedicated areas — each designed for a specific type of training."
          />
          <div className="space-y-6">
            {facilities.map((facility, i) => (
              <div
                key={facility.title}
                className={`group grid grid-cols-1 lg:grid-cols-2 overflow-hidden border transition-colors ${
                  facility.highlight
                    ? 'border-az-green/40 hover:border-az-green bg-az-green/5'
                    : 'border-white/10 hover:border-white/20 bg-az-charcoal'
                } ${i % 2 === 1 ? '' : ''}`}
              >
                {/* Image — alternates sides */}
                <div
                  className={`relative aspect-video lg:aspect-auto overflow-hidden ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {facility.highlight && (
                    <div className="absolute top-4 left-4 bg-az-green text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">
                      FREE FOR MEMBERS
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="heading-sm text-az-offwhite mb-4">{facility.title}</h3>
                  <p className="text-az-offwhite/60 text-sm leading-relaxed mb-6">
                    {facility.desc}
                  </p>
                  <ul className="space-y-2">
                    {facility.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-az-offwhite/60">
                        <Check
                          size={14}
                          className={facility.highlight ? 'text-az-green' : 'text-az-green'}
                          strokeWidth={2.5}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP ACCESS ───────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-14">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 p-8 lg:p-10">
            <div>
              <p className="label-text mb-2">FULL ACCESS</p>
              <h2 className="heading-md text-az-offwhite mb-2">
                ALL FACILITIES INCLUDED IN YOUR MEMBERSHIP
              </h2>
              <p className="text-az-offwhite/60 body-md max-w-xl">
                Every area — from the lifting floor to the tennis court — is available to AZ
                Fitness members. No hidden extras.
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
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&h=500&fit=crop"
                alt="Inside AZ Fitness"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/50 to-transparent" />
            </div>
            {/* Content */}
            <div>
              <p className="label-text mb-4">VISIT US</p>
              <h2 className="heading-lg text-az-offwhite mb-6">
                COME SEE
                <br />
                <span className="text-az-green">THE GYM.</span>
              </h2>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-4">
                The best way to know if AZ Fitness is right for you is to come in. Walk through
                the facilities, meet the team, and ask your questions in person.
              </p>
              <p className="text-az-offwhite/50 text-sm mb-8">
                No commitment required — just show up during opening hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/book" size="lg">
                  Book a Visit
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
