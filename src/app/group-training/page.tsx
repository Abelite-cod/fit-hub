import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Group Training | AZ Fitness — Trainer-Led Classes in Ile-Ife',
  description:
    'Trainer-led group training sessions at AZ Fitness in Ile-Ife. Energy, structure, and community in every class. Suitable for all fitness levels.',
};

const sessionFormats = [
  {
    title: 'BODY CONDITIONING',
    desc: 'A full-body session combining resistance and cardio work. Improves strength, endurance, and overall body composition. Suitable for all levels.',
    features: ['Full-body resistance training', 'Cardio intervals', 'Beginner-friendly scaling', 'Equipment provided'],
  },
  {
    title: 'AEROBICS & CARDIO',
    desc: "Get your heart rate up and improve your cardiovascular fitness. These sessions are high-energy, trainer-led, and designed to push your endurance.",
    features: ['Cardiovascular endurance focus', 'High-energy format', 'Low-impact options available', 'Improves stamina and heart health'],
  },
  {
    title: 'CIRCUIT TRAINING',
    desc: "Timed stations, full-body challenge. Circuit training keeps you moving through structured exercise stations — strength, speed, and conditioning in one session.",
    features: ['Timed station format', 'Strength & conditioning combined', 'Keeps intensity high', 'Works multiple muscle groups'],
  },
];

const schedule = [
  { day: 'Monday', morning: 'Body Conditioning', evening: 'Circuit Training' },
  { day: 'Tuesday', morning: 'Aerobics & Cardio', evening: 'Body Conditioning' },
  { day: 'Wednesday', morning: 'Circuit Training', evening: 'Aerobics & Cardio' },
  { day: 'Thursday', morning: 'Body Conditioning', evening: 'Circuit Training' },
  { day: 'Friday', morning: 'Aerobics & Cardio', evening: 'Body Conditioning' },
  { day: 'Saturday', morning: 'Circuit Training', evening: '—' },
];

const whoShouldJoin = [
  {
    title: 'BEGINNERS',
    desc: "Never trained in a class before? Group sessions are a great way to start. You'll be guided by the trainer throughout — no experience needed.",
  },
  {
    title: 'INTERMEDIATE',
    desc: 'Already training but want more structure and energy? Group sessions push you harder than solo training and keep your routine from going stale.',
  },
  {
    title: 'ANYONE WHO STRUGGLES WITH SOLO TRAINING',
    desc: "If you find it hard to stay motivated training alone, group classes solve that problem. The environment, the trainer, and the other members keep you accountable.",
  },
];

export default function GroupTrainingPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80"
            alt="Group training at AZ Fitness"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-az-black via-az-black/85 to-az-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-az-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container-wide section-padding pt-24 lg:pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-text mb-5">GROUP TRAINING</p>
            <h1 className="heading-xl text-az-offwhite mb-6">
              SHOW UP.
              <br />
              PUT IN
              <br />
              <span className="text-az-green">THE WORK.</span>
            </h1>
            <p className="body-lg text-az-offwhite/70 max-w-xl">
              Trainer-led group sessions that push you to work harder. Energy, structure, and
              community in every class.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/book?service=group-training" size="lg">
                Join a Class
              </Button>
              <Button href="#schedule" variant="ghost" size="lg">
                View Schedule
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT GROUP TRAINING ────────────────────────────────────────────── */}
      <section className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="label-text mb-4">WHAT IT IS</p>
              <h2 className="heading-lg text-az-offwhite mb-0">
                TRAIN
                <br />
                <span className="text-az-green">TOGETHER.</span>
              </h2>
            </div>
            <div>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-6">
                Group training at AZ Fitness is trainer-led and structured. Every session has a
                clear format, a clear goal, and a trainer running the class from start to finish.
              </p>
              <p className="body-lg text-az-offwhite/70 leading-relaxed mb-6">
                Sessions cover different formats — body conditioning, cardio and aerobics, and
                circuit training — so there is variety in what you train and how you train it.
              </p>
              <p className="body-lg text-az-offwhite/70 leading-relaxed">
                Whether you&apos;re new to training or experienced, the group environment creates
                accountability, energy, and consistency that solo training often can&apos;t match.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Trainer-led every session',
                  'Structured, goal-oriented formats',
                  'Multiple class types weekly',
                  'Suitable for different fitness levels',
                  'Community atmosphere',
                  'Fixed, consistent schedule',
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

      {/* ─── SESSION FORMATS ─────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="WHAT WE OFFER"
            title="SESSION FORMATS"
            subtitle="Three distinct class formats — each with a different focus, all coached by our trainers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessionFormats.map((format) => (
              <div
                key={format.title}
                className="bg-az-charcoal border border-white/10 p-8 hover:border-az-green/40 transition-colors"
              >
                <div className="w-12 h-1 bg-az-green mb-6" />
                <h3 className="heading-sm text-az-offwhite mb-4">{format.title}</h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed mb-6">{format.desc}</p>
                <ul className="space-y-2">
                  {format.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-az-offwhite/50">
                      <Check size={12} className="text-az-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCHEDULE ────────────────────────────────────────────────────────── */}
      <section id="schedule" className="bg-az-charcoal section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="WEEKLY SCHEDULE"
            title="CLASS TIMETABLE"
            subtitle="Contact us for confirmed session times. The schedule below is a guide to typical session availability."
          />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-6 text-az-offwhite/40 font-semibold text-xs uppercase tracking-wider">
                    Day
                  </th>
                  <th className="text-left py-4 px-4 text-az-offwhite/40 font-semibold text-xs uppercase tracking-wider">
                    Morning
                  </th>
                  <th className="text-left py-4 pl-4 text-az-offwhite/40 font-semibold text-xs uppercase tracking-wider">
                    Evening
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {schedule.map((row) => (
                  <tr key={row.day} className="hover:bg-az-black/40 transition-colors">
                    <td className="py-4 pr-6 text-az-offwhite font-semibold text-xs uppercase tracking-wide">
                      {row.day}
                    </td>
                    <td className="py-4 px-4">
                      {row.morning !== '—' ? (
                        <span className="inline-block border border-az-green/30 text-az-green text-xs px-3 py-1 uppercase tracking-wide">
                          {row.morning}
                        </span>
                      ) : (
                        <span className="text-az-offwhite/30 text-xs">—</span>
                      )}
                    </td>
                    <td className="py-4 pl-4">
                      {row.evening !== '—' ? (
                        <span className="inline-block border border-white/20 text-az-offwhite/60 text-xs px-3 py-1 uppercase tracking-wide">
                          {row.evening}
                        </span>
                      ) : (
                        <span className="text-az-offwhite/30 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-az-offwhite/40 text-xs mt-6 italic">
            Schedule is illustrative. Contact AZ Fitness for confirmed current session times.
          </p>
        </div>
      </section>

      {/* ─── WHO SHOULD JOIN ─────────────────────────────────────────────────── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            label="IS IT FOR YOU?"
            title="WHO SHOULD JOIN GROUP TRAINING"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoShouldJoin.map((card) => (
              <div
                key={card.title}
                className="border border-white/10 p-8 bg-az-charcoal hover:border-az-green/30 transition-colors"
              >
                <div className="w-10 h-10 bg-az-green flex items-center justify-center mb-5">
                  <Check size={18} className="text-white" />
                </div>
                <h3 className="heading-sm text-az-offwhite mb-4">{card.title}</h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="bg-az-green section-padding py-20">
        <div className="container-wide text-center">
          <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">
            GET STARTED
          </p>
          <h2 className="heading-lg text-white mb-6">
            JOIN A CLASS AT
            <br />
            AZ FITNESS
          </h2>
          <p className="text-white/80 body-lg max-w-xl mx-auto mb-10">
            Show up for your first session, tell the trainer your level, and get started. No
            experience needed.
          </p>
          <Button href="/book?service=group-training" variant="secondary" size="lg">
            Join a Class
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
