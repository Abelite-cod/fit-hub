import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, ArrowRight, ChevronRight, Star, Check, Dumbbell, Heart, Users, Target, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { businessInfo } from '@/data/businessInfo';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { memberships } from '@/data/memberships';

export const metadata: Metadata = {
  title: 'AZ Fitness | Train With Purpose — Ile-Ife, Osun State',
  description:
    'AZ Fitness is a luxurious gym in Ile-Ife, Osun State, Nigeria. Strength training, boxing, personal training, group classes, tennis, and nutrition guidance.',
  openGraph: {
    title: 'AZ Fitness | Train With Purpose — Ile-Ife, Osun State',
    description:
      'A luxurious gym in Ile-Ife, Osun State, Nigeria. Strength training, boxing, personal training, group classes, tennis, and nutrition guidance.',
  },
};

// Featured services for homepage preview
const featuredServices = services.filter((s) =>
  ['strength-lifting', 'boxing', 'personal-training', 'group-training', 'weight-loss', 'cardio-aerobic'].includes(s.id)
);

// Icon map for services
const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell size={24} />,
  Heart: <Heart size={24} />,
  Users: <Users size={24} />,
  Target: <Target size={24} />,
  Activity: <Zap size={24} />,
  TrendingDown: <Target size={24} />,
};

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HealthClub',
            name: 'AZ Fitness',
            description: 'A fitness centre in Ile-Ife, Osun State, Nigeria. Strength training, boxing, personal training, group classes, tennis, and nutrition guidance.',
            url: 'https://azfitness.example',
            telephone: '+234XXXXXXXXXX',
            email: 'contact@azfitness.example',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Powerline Junction, Ajebamidele Area',
              addressLocality: 'Ile-Ife',
              addressRegion: 'Osun State',
              addressCountry: 'NG',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 7.4667,
              longitude: 4.5667,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '19:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '07:00',
                closes: '12:00',
              },
            ],
            sameAs: ['https://www.instagram.com/azfitness_gym'],
            priceRange: '₦₦',
            currenciesAccepted: 'NGN',
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Weights & Lifting Area', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Boxing Training', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Personal Training', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Group Training', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Tennis Court', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Nutrition Guidance', value: true },
            ],
          }),
        }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="AZ Fitness gym floor"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/80 to-az-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-wide section-padding pt-32 pb-24">
          <div className="max-w-3xl">
            <p className="label-text mb-6">Ile-Ife, Osun State · Nigeria</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              Train With
              <br />
              <span className="text-az-green">Purpose.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl mb-10">
              AZ Fitness is a fitness empire built for people who want to train properly, stay
              consistent, and see real results. Strength, boxing, personal coaching, and more —
              all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/book" size="lg">
                Join Now
              </Button>
              <Button href="/training" variant="ghost" size="lg">
                Explore Training
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            {/* Quick Info Bar */}
            <div className="mt-16 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-az-offwhite/60 text-sm">
                <MapPin size={14} className="text-az-green" />
                <span>{businessInfo.address.city}, {businessInfo.address.state}</span>
              </div>
              <div className="flex items-center gap-2 text-az-offwhite/60 text-sm">
                <Clock size={14} className="text-az-green" />
                <span>Mon–Fri 7AM–7PM · Sat 7AM–12PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-az-offwhite/30">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-az-green/60" />
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────────── */}
      <section className="bg-az-green">
        <div className="container-wide section-padding py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
            {[
              { value: '12+', label: 'Services Offered' },
              { value: '3', label: 'Expert Trainers' },
              { value: '1', label: 'Tennis Court' },
              { value: '100%', label: 'Commitment to Results' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:px-8">
                <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-white/80 text-xs font-medium tracking-wide uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT INTRO ─────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=1000&fit=crop"
                  alt="Member training at AZ Fitness"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-az-green text-white p-6 hidden lg:block">
                <p className="text-4xl font-black leading-none">No</p>
                <p className="text-4xl font-black leading-none text-white/80">Excuses.</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <SectionHeading
                label="About AZ Fitness"
                title="A Gym Built for your Excercising & Training"
                subtitle="AZ Fitness is located in Ile-Ife, Osun State, Nigeria. We exist for one reason — to give you the environment, equipment, and guidance to train properly and see results."
              />
              <div className="space-y-4 mb-8">
                {[
                  'Fully equipped gym floor for strength and conditioning',
                  'Dedicated boxing training with experienced coaching',
                  'Personalised one-on-one personal training',
                  'Group classes, cardio, nutrition, and wellness services',
                  'Recreational tennis court — free for all members',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-az-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-az-green" />
                    </div>
                    <p className="text-az-offwhite/70 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <Button href="/about" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="What We Offer"
            title="Training for Every Goal"
            subtitle="Whether you're building strength, losing weight, learning to box, or looking for guided coaching — AZ Fitness has a programme for you."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-az-black border border-white/10 p-6 hover:border-az-green/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-az-green/10 border border-az-green/20 flex items-center justify-center text-az-green mb-5 group-hover:bg-az-green group-hover:text-white transition-colors duration-300">
                  {iconMap[service.icon] ?? <Dumbbell size={24} />}
                </div>
                <h3 className="heading-sm text-az-offwhite mb-3 group-hover:text-az-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-az-green tracking-wider uppercase">
                  Learn More <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/training" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ─── BOXING FEATURE ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=800&fit=crop"
            alt="Boxing training at AZ Fitness"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-az-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding py-24 lg:py-32">
          <div className="max-w-xl">
            <p className="label-text mb-4">Specialist Training</p>
            <h2 className="heading-lg text-az-offwhite mb-6">
              Boxing at
              <br />
              <span className="text-az-green">AZ Fitness</span>
            </h2>
            <p className="body-lg text-az-offwhite/70 mb-8">
              Technique, fitness, and discipline. Our boxing training covers fundamentals through to
              conditioning — for all levels, from complete beginners to those sharpening their skills.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Technique & Fundamentals', 'Pad & Bag Work', 'Footwork & Defence', 'Boxing Conditioning'].map(
                (f) => (
                  <span
                    key={f}
                    className="border border-white/20 text-az-offwhite/70 text-xs px-3 py-1.5 tracking-wide"
                  >
                    {f}
                  </span>
                )
              )}
            </div>
            <Button href="/boxing" size="lg">
              Explore Boxing
            </Button>
          </div>
        </div>
      </section>

      {/* ─── PERSONAL TRAINING ───────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Personal Training"
                title="Your Programme. Your Coach. Your Results."
                subtitle="Personal training at AZ Fitness is one-on-one coaching built entirely around your goals. Flexible scheduling, personalised programming, and the accountability to stay consistent."
              />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Trophy size={18} />, label: 'Goal-Focused Programming' },
                  { icon: <Target size={18} />, label: '100% Personalised' },
                  { icon: <Zap size={18} />, label: 'Progress Tracking' },
                  { icon: <Users size={18} />, label: 'Nutrition Guidance' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-az-green">{item.icon}</span>
                    <span className="text-az-offwhite/70 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <Button href="/personal-training" variant="primary">
                Learn About PT
              </Button>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=1000&fit=crop"
                alt="Personal training session at AZ Fitness"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIPS ─────────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="Memberships"
            title="Choose Your Plan"
            subtitle="Flexible membership options designed to fit your training goals and commitment level."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col border p-8 ${
                  plan.highlighted
                    ? 'border-az-green bg-az-green/5'
                    : 'border-white/10 bg-az-black'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-az-green text-white text-xs font-bold tracking-widest uppercase px-4 py-1">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <p className="label-text mb-2">{plan.name}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-black text-az-offwhite">{plan.price}</span>
                  </div>
                  <p className="text-az-offwhite/50 text-xs uppercase tracking-wider">{plan.period}</p>
                  <p className="text-az-offwhite/60 text-sm mt-3 leading-relaxed">{plan.description}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={14} className="text-az-green flex-shrink-0 mt-0.5" />
                      <span className="text-az-offwhite/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/book"
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-az-offwhite/40 text-sm mt-8">
            Contact us for more information on membership rates.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="Member Stories"
            title="What Our Members Say"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-az-charcoal border border-white/10 p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-az-green fill-az-green" />
                  ))}
                </div>
                <blockquote className="text-az-offwhite/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-az-offwhite font-semibold text-sm">{t.name}</p>
                    <p className="text-az-offwhite/40 text-xs mt-0.5">{t.memberSince}</p>
                  </div>
                  <span className="text-xs border border-az-green/30 text-az-green px-2 py-1 uppercase tracking-wider">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 lg:mb-14">
            <SectionHeading
              label="Gallery"
              title="Inside AZ Fitness"
              className="mb-0"
            />
            <Link
              href="/gallery"
              className="hidden sm:flex items-center gap-2 text-sm text-az-offwhite/60 hover:text-az-green transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop', alt: 'Gym floor', span: 'col-span-2 row-span-2' },
              { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop', alt: 'Boxing' },
              { src: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop', alt: 'Tennis' },
              { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop', alt: 'Training' },
              { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop', alt: 'Group class' },
              { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop', alt: 'Lifting' },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-az-black aspect-square ${img.span ?? ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:hidden">
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* ─── LOCATION & HOURS ────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading
                label="Find Us"
                title="Visit AZ Fitness"
                subtitle="We are located at Powerline Junction, Ajebamidele Area, Ile-Ife, Osun State. Come in during opening hours — no appointment needed."
              />

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-az-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-az-green" />
                  </div>
                  <div>
                    <p className="text-az-offwhite font-semibold text-sm mb-1">Address</p>
                    <p className="text-az-offwhite/60 text-sm leading-relaxed">
                      {businessInfo.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-az-green/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-az-green" />
                  </div>
                  <div>
                    <p className="text-az-offwhite font-semibold text-sm mb-2">Opening Hours</p>
                    <div className="space-y-1">
                      {businessInfo.hours.map((h) => (
                        <div key={h.day} className="flex items-center justify-between gap-8 text-sm">
                          <span className="text-az-offwhite/60">{h.day}</span>
                          <span
                            className={
                              h.time === 'Closed' ? 'text-red-400' : 'text-az-offwhite'
                            }
                          >
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href={businessInfo.mapUrl} external variant="primary">
                  Get Directions
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square lg:aspect-auto lg:h-96 bg-az-charcoal border border-white/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
                alt="Map view of Ile-Ife area"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin size={32} className="text-az-green mb-3" />
                <p className="text-az-offwhite font-bold text-lg">AZ Fitness</p>
                <p className="text-az-offwhite/60 text-sm mt-1">
                  Powerline Junction, Ajebamidele Area
                  <br />
                  Ile-Ife, Osun State
                </p>
                <a
                  href={businessInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-az-green border border-az-green px-4 py-2 hover:bg-az-green hover:text-white transition-colors"
                >
                  Open in Google Maps <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-az-green">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-[30px] border-white rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 container-wide section-padding py-20 text-center">
          <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">
            Ready to Start?
          </p>
          <h2 className="heading-lg text-white mb-6">
            Your First Step
            <br />
            Starts Here.
          </h2>
          <p className="text-white/80 body-lg max-w-xl mx-auto mb-10">
            Walk in during opening hours, send us a message, or book through our enquiry form.
            No judgement. No gatekeeping. Just serious training.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/book" variant="secondary" size="lg">
              Enquire Now
            </Button>
            <Button href={businessInfo.contact.whatsappLink} external variant="ghost" size="lg">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
