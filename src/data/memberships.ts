export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export const memberships: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₦XX,XXX',
    period: 'per month',
    description: 'Everything you need to get started and stay consistent.',
    features: [
      'Full gym floor access',
      'Cardio & weights equipment',
      'Locker use during sessions',
      'Access to group classes',
      'Tennis court access (recreational)',
    ],
    highlighted: false,
    ctaText: 'Get Started',
  },
  {
    id: 'performance',
    name: 'Performance',
    price: '₦XX,XXX',
    period: 'per month',
    description: 'For those training seriously and looking for more support.',
    features: [
      'Everything in Starter',
      'Monthly personal training session (1x)',
      'Nutritional guidance session',
      'Priority class booking',
      'Progress tracking',
      'Gym wear discount',
    ],
    highlighted: true,
    ctaText: 'Train Harder',
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '₦XX,XXX',
    period: 'per year',
    description: 'Commit to the year. Get the best value.',
    features: [
      'Everything in Performance',
      'Unlimited personal training (2x/month)',
      'Full nutrition programme',
      'Exclusive member offers in the shop',
      'Guest passes (2/month)',
      'Priority support',
    ],
    highlighted: false,
    ctaText: 'Join Annually',
  },
];
