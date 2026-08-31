import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { memberships } from '@/data/memberships';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Memberships',
  description: 'Choose the AZ Fitness membership that suits your goals. Starter, Performance, and Annual plans available in Ile-Ife, Osun State.',
};

export default function MembershipsPage() {
  const membershipFaqs = faqs.filter(f => f.category === 'Memberships');
  
  return (
    <>
      {/* Hero */}
      <section className="bg-az-black pt-32 pb-20 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">JOIN AZ FITNESS</p>
          <h1 className="heading-xl text-az-offwhite mb-6 max-w-3xl">CHOOSE YOUR PLAN.</h1>
          <p className="body-lg text-az-offwhite/70 max-w-xl">
            Three membership options. All include full gym access, equipment, group classes, and free tennis court use. Pick the one that matches your goals.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-az-charcoal py-20 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {memberships.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 border transition-all ${
                  plan.highlighted
                    ? 'border-az-green bg-az-green-deep'
                    : 'border-white/10 bg-az-black'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-az-green text-white text-xs font-semibold tracking-widest uppercase px-3 py-1">
                      Most Popular
                    </span>
                  </div>
                )}
                <p className="label-text mb-2">{plan.name}</p>
                <div className="mb-4">
                  <span className="text-4xl font-black text-az-offwhite">{plan.price}</span>
                  <span className="text-az-offwhite/50 text-sm ml-2">/{plan.period}</span>
                </div>
                <p className="text-az-offwhite/70 text-sm mb-8 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-az-offwhite/80">
                      <Check size={14} className="text-az-green mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/book"
                  variant={plan.highlighted ? 'secondary' : 'outline'}
                  className="w-full justify-center"
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-az-black py-20 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">COMPARE PLANS</p>
          <h2 className="heading-lg text-az-offwhite mb-12">WHAT&apos;S INCLUDED.</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-8 text-az-offwhite/50 text-sm font-medium w-1/2">Feature</th>
                  <th className="text-center py-4 px-4 text-az-offwhite text-sm font-bold uppercase">Starter</th>
                  <th className="text-center py-4 px-4 text-az-green text-sm font-bold uppercase">Performance</th>
                  <th className="text-center py-4 px-4 text-az-offwhite text-sm font-bold uppercase">Annual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Full gym floor access', starter: true, performance: true, annual: true },
                  { feature: 'Group training classes', starter: true, performance: true, annual: true },
                  { feature: 'Tennis court (recreational)', starter: true, performance: true, annual: true },
                  { feature: 'Personal training session', starter: false, performance: '1x/month', annual: '2x/month' },
                  { feature: 'Nutritional guidance', starter: false, performance: true, annual: true },
                  { feature: 'Full nutrition programme', starter: false, performance: false, annual: true },
                  { feature: 'Guest passes', starter: false, performance: false, annual: '2/month' },
                  { feature: 'Gym wear discount', starter: false, performance: true, annual: true },
                  { feature: 'Priority class booking', starter: false, performance: true, annual: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-4 pr-8 text-sm text-az-offwhite/70">{row.feature}</td>
                    {(['starter', 'performance', 'annual'] as const).map((col) => (
                      <td key={col} className="text-center py-4 px-4">
                        {row[col] === true ? (
                          <Check size={16} className={`mx-auto ${col === 'performance' ? 'text-az-green' : 'text-az-offwhite/60'}`} />
                        ) : row[col] === false ? (
                          <span className="text-az-offwhite/20 text-lg">—</span>
                        ) : (
                          <span className={`text-xs font-medium ${col === 'performance' ? 'text-az-green' : 'text-az-offwhite/70'}`}>{row[col]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-az-charcoal py-20 section-padding">
        <div className="container-wide max-w-3xl">
          <p className="label-text mb-4">QUESTIONS</p>
          <h2 className="heading-lg text-az-offwhite mb-12">MEMBERSHIP FAQ.</h2>
          <div className="space-y-0">
            {membershipFaqs.map((faq) => (
              <div key={faq.id} className="border-b border-white/10 py-6">
                <h3 className="text-az-offwhite font-semibold mb-3">{faq.question}</h3>
                <p className="text-az-offwhite/60 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-az-green-deep py-20 section-padding">
        <div className="container-wide text-center">
          <h2 className="heading-lg text-az-offwhite mb-4">READY TO JOIN?</h2>
          <p className="text-az-offwhite/70 mb-10 max-w-lg mx-auto">Come in and see the gym, or enquire through the form. We&apos;ll get you started.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="secondary" size="lg">Join AZ Fitness</Button>
            <Button href="/contact" variant="ghost" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
