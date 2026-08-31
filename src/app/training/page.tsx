import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Training | AZ Fitness — Strength, Conditioning & More',
  description:
    'Explore all training programmes at AZ Fitness in Ile-Ife. Strength & lifting, body conditioning, weight loss, weight gain, cardio, and specific training — for all levels.',
};

const trainingServices = services.filter((s) => s.category === 'training');

const trainingNumbers = ['01', '02', '03', '04', '05', '06'];

const faqs = [
  {
    q: 'I have never trained before. Can I join?',
    a: 'Absolutely. AZ Fitness is built for all levels. Our trainers will help you start properly — with the right technique, the right programme, and the right progression.',
  },
  {
    q: 'How is personal training different from group training?',
    a: 'Personal training is one-on-one. You get a programme built specifically for you, direct coaching in every session, and full flexibility on scheduling. Group training is trainer-led classes with other members — great for motivation and structure.',
  },
  {
    q: 'Can I train in a group even as a beginner?',
    a: 'Yes. Our group sessions are designed to accommodate different fitness levels. Trainers will guide you through modifications where needed.',
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="AZ Fitness training floor"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">AZ FITNESS TRAINING</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              TRAIN WITH
              <br />
              <span className="text-az-green">STRUCTURE.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              From strength lifting to cardio, body conditioning to specific goal training — AZ
              Fitness has programmes for all levels and goals.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/book" size="lg">
                Join Now
              </Button>
              <Button href="#programmes" variant="ghost" size="lg">
                See Programmes
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRAINING OVERVIEW ───────────────────────────────────────────────── */}
      <section id="programmes" className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="OUR PROGRAMMES"
            title="SIX TRAINING AREAS. ONE GYM."
            subtitle="Every programme at AZ Fitness is structured around real goals and proper technique."
          />
          <div className="space-y-0 divide-y divide-white/10 border border-white/10">
            {trainingServices.map((service, i) => (
              <div
                key={service.id}
                className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_300px] gap-0 hover:bg-az-charcoal transition-colors duration-200"
              >
                {/* Number */}
                <div className="hidden lg:flex items-center justify-center border-r border-white/10 p-8">
                  <span className="text-4xl font-black text-az-green/30 group-hover:text-az-green/60 transition-colors">
                    {trainingNumbers[i]}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6 lg:p-10 border-r border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="lg:hidden text-xs font-black text-az-green/40">
                      {trainingNumbers[i]}
                    </span>
                    <h3 className="heading-sm text-az-offwhite group-hover:text-az-green transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-az-offwhite/60 text-sm leading-relaxed mb-5">
                    {service.longDesc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-az-offwhite/50">
                        <Check size={12} className="text-az-green flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA */}
                <div className="flex items-center justify-center p-6 lg:p-10">
                  <Button href="/book" variant="outline" size="sm">
                    Start Training
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERSONAL TRAINING CALLOUT ───────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-14">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 p-8 lg:p-10">
            <div>
              <p className="label-text mb-2">SPECIALIST TRAINING</p>
              <h2 className="heading-md text-az-offwhite mb-2">
                WANT A PROGRAMME BUILT AROUND YOU?
              </h2>
              <p className="text-az-offwhite/60 body-md max-w-xl">
                Personal training gives you one-on-one coaching tailored to your specific goals.
                Your trainer works with you every session — not a generic plan.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href="/personal-training" size="lg">
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GROUP TRAINING CALLOUT ──────────────────────────────────────────── */}
      <section className="section-padding py-14">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 p-8 lg:p-10">
            <div>
              <p className="label-text mb-2">COMMUNITY TRAINING</p>
              <h2 className="heading-md text-az-offwhite mb-2">
                PREFER TRAINING WITH A GROUP?
              </h2>
              <p className="text-az-offwhite/60 body-md max-w-xl">
                Trainer-led group sessions that push you harder. The energy of a class with the
                structure of a coached programme.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href="/group-training" variant="outline" size="lg">
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ TEASER ──────────────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="COMMON QUESTIONS"
            title="TRAINING FAQ"
          />
          <div className="space-y-0 divide-y divide-white/10 border-t border-white/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <h3 className="text-az-offwhite font-bold text-base uppercase tracking-wide mb-3">
                  {faq.q}
                </h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed max-w-2xl">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-az-green section-padding py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-[30px] border-white rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 container-wide text-center">
          <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">
            GET STARTED
          </p>
          <h2 className="heading-lg text-white mb-6">READY TO TRAIN?</h2>
          <p className="text-white/80 body-lg max-w-xl mx-auto mb-10">
            Pick your programme, come in during opening hours, and get started. No complicated
            sign-up — just show up.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/book" variant="secondary" size="lg">
              Join AZ Fitness
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Enquire
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
