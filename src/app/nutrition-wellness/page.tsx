import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Nutrition & Wellness | AZ Fitness — Eat Right. Train Right.',
  description:
    'Nutrition guidance and wellness services at AZ Fitness in Ile-Ife. Nutritional assessment, meal planning, supplement advice, and massage & recovery services.',
};

const nutritionServices = [
  {
    title: 'NUTRITIONAL ASSESSMENT',
    desc: 'We start by understanding your current eating habits, lifestyle, and goals. A clear picture of where you are now helps build the right plan going forward.',
    points: ['Current diet analysis', 'Goal alignment', 'Lifestyle considerations', 'Personalised recommendations'],
  },
  {
    title: 'MEAL PLANNING GUIDANCE',
    desc: 'A practical eating plan to support your training — not a restrictive diet, but a sustainable approach aligned to your goals and what you actually eat.',
    points: ['Goal-aligned meal structure', 'Practical & sustainable', 'Pre and post-training nutrition', 'Flexible planning approach'],
  },
  {
    title: 'SUPPLEMENT ADVICE',
    desc: "What to take, what to skip, and what actually works. We cut through the noise and give you straightforward advice based on your goals — not marketing.",
    points: ['Evidence-based guidance', 'Goal-specific recommendations', 'What to avoid', 'Cost-effective supplement use'],
  },
  {
    title: 'GOAL-SPECIFIC NUTRITION',
    desc: 'Different goals need different nutritional approaches. Whether you are losing weight, building muscle, or training for performance — your plan will reflect that.',
    points: ['Weight loss nutrition plans', 'Muscle gain & hypertrophy support', 'Performance nutrition', 'General health & energy'],
  },
  {
    title: 'RECOVERY NUTRITION',
    desc: 'What you eat before and after training makes a real difference to your results. Recovery nutrition focuses on optimising how your body rebuilds and adapts.',
    points: ['Pre-training nutrition timing', 'Post-workout meals', 'Protein & carbohydrate guidance', 'Hydration recommendations'],
  },
];

const massageServices = [
  {
    title: 'SPORTS MASSAGE',
    desc: 'Targeted massage to address muscle fatigue, tightness, and tension from training. Helps you recover faster and stay consistent in your programme.',
  },
  {
    title: 'DEEP TISSUE MASSAGE',
    desc: 'Deeper pressure work to address chronic muscle tension, knots, and problem areas. Effective for people with specific tightness from training or lifestyle.',
  },
];

const whoItsFor = [
  {
    title: 'WEIGHT LOSS',
    desc: 'Nutrition is the biggest factor in sustainable weight loss. We help you eat in a calorie deficit without feeling deprived — structured, realistic, and aligned to your training.',
  },
  {
    title: 'MUSCLE GAIN',
    desc: "Building muscle requires a calorie surplus and enough protein. We'll help you structure your eating to support consistent muscle gains alongside your lifting programme.",
  },
  {
    title: 'GENERAL HEALTH & ENERGY',
    desc: "You don't need a specific physique goal to benefit from better nutrition. Improved diet quality leads to better energy, sleep, focus, and overall wellbeing.",
  },
];

export default function NutritionWellnessPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80"
            alt="Nutrition and wellness at AZ Fitness"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">NUTRITION & WELLNESS</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              TRAIN RIGHT.
              <br />
              <span className="text-az-green">EAT RIGHT.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              Training gets you in the gym. Nutrition keeps you on track. AZ Fitness provides
              guidance on both.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/book?service=nutrition" size="lg">
                Book a Consultation
              </Button>
              <Button href="#services" variant="ghost" size="lg">
                Our Services
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY NUTRITION MATTERS ───────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop"
                alt="Nutritious food for training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/40 to-transparent" />
            </div>
            {/* Content */}
            <div>
              <p className="label-text mb-4">WHY IT MATTERS</p>
              <h2 className="heading-md text-az-offwhite mb-6">
                YOUR TRAINING IS ONLY AS EFFECTIVE AS YOUR RECOVERY AND NUTRITION.
              </h2>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-4">
                AZ Fitness works with you on the nutritional side of your fitness journey — not
                with fad diets, but with practical guidance aligned to your goals.
              </p>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-6">
                Whether you want to lose weight, build muscle, or simply feel better and perform
                better, what you eat has a direct impact on what you get out of your training.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Supports your training results',
                  'Improves energy and recovery',
                  'Sustainable — not a short-term fix',
                  'Aligned to your specific goals',
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

      {/* ─── NUTRITION SERVICES ──────────────────────────────────────────────── */}
      <section id="services" className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="NUTRITION SERVICES"
            title="WHAT WE OFFER"
            subtitle="From your first nutritional assessment through to goal-specific meal planning — AZ Fitness covers the full picture."
          />
          <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
            {nutritionServices.map((service, i) => (
              <div
                key={service.title}
                className="group grid grid-cols-1 lg:grid-cols-[60px_1fr_280px] gap-0 hover:bg-az-charcoal transition-colors duration-200 py-8 lg:py-0"
              >
                {/* Number */}
                <div className="hidden lg:flex items-center justify-center py-10">
                  <span className="text-3xl font-black text-az-green/25 group-hover:text-az-green/50 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Content */}
                <div className="lg:px-8 lg:py-10">
                  <h3 className="heading-sm text-az-offwhite mb-3 group-hover:text-az-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-az-offwhite/60 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-az-offwhite/50">
                        <Check size={11} className="text-az-green flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA */}
                <div className="hidden lg:flex items-center justify-center py-10 px-6">
                  <Button href="/book?service=nutrition" variant="outline" size="sm">
                    Enquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MASSAGE & RECOVERY ──────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <p className="label-text mb-4">MASSAGE & RECOVERY</p>
              <h2 className="heading-lg text-az-offwhite mb-6">
                RECOVERY IS
                <br />
                PART OF
                <br />
                <span className="text-az-green">TRAINING.</span>
              </h2>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-8">
                AZ Fitness offers massage services to help you stay consistent. Regular recovery
                work reduces soreness, prevents injury, and keeps your body performing at its best.
              </p>
              <div className="space-y-6 mb-8">
                {massageServices.map((ms) => (
                  <div
                    key={ms.title}
                    className="bg-az-black border border-white/10 p-6 hover:border-az-green/30 transition-colors"
                  >
                    <h3 className="text-az-offwhite font-bold text-sm uppercase tracking-wide mb-2">
                      {ms.title}
                    </h3>
                    <p className="text-az-offwhite/60 text-sm leading-relaxed">{ms.desc}</p>
                  </div>
                ))}
              </div>
              <Button href="/book?service=massage" size="lg">
                Book a Massage
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop"
                alt="Recovery massage at AZ Fitness"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="WHO IS IT FOR?"
            title="NUTRITION GUIDANCE FOR EVERY GOAL"
            subtitle="Whether you are losing weight, building muscle, or just trying to feel better — nutrition guidance at AZ Fitness is built around your specific situation."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoItsFor.map((card) => (
              <div
                key={card.title}
                className="bg-az-charcoal border border-white/10 p-8 hover:border-az-green/40 transition-colors"
              >
                <div className="w-12 h-1 bg-az-green mb-6" />
                <h3 className="heading-sm text-az-offwhite mb-4">{card.title}</h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
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
            READY TO GET YOUR
            <br />
            NUTRITION RIGHT?
          </h2>
          <p className="text-white/80 body-lg max-w-xl mx-auto mb-10">
            Book a nutrition consultation and start eating in a way that actually supports your
            training and your goals.
          </p>
          <Button href="/book?service=nutrition" variant="secondary" size="lg">
            Book a Nutrition Consultation
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
