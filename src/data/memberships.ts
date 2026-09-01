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
    id: 'Normal',
    name: 'Normal',
    price: '₦25,000',
    period: 'per month',
    description: 'Everything you need to get started and stay consistent.',
    features: [
      'Full gym floor access',
      'Cardio & weights equipment',
      'Full gym workout facilities',
      'Locker use during sessions',
      'Access to group classes, extracurricular and social activities',
      'Table-Tennis court access for recreational purpose',
      'Access to Rest-Room'
    ],
    highlighted: true,
    ctaText: 'Get Started',
  },
  {
    id: 'PersonalTraining',
    name: 'Personal Training',
    price: '₦40,000',
    period: 'per month',
    description: 'For those training on schedules, and looking for more support.',
    features: [
      'Everything in Normal subscription',
      'Personal Progress tracking',
      'Personal training session',
      'Nutritional guidance session',
      'Priority class booking',
      'Gym wear discount',
    ],
    highlighted: false,
    ctaText: 'Train Harder',
  },
  {
    id: 'VIP',
    name: 'VIP',
    price: '₦80,000',
    period: 'per Month',
    description: 'Commit to the year. Get the best value.',
    features: [
      'Everything in Personal Training',
      'Unlimited personal training (2x/month)',
      'Full nutrition programme',
      'Exclusive member offers in the shop',
      'Guest passes (2/month)',
      'Priority support',
    ],
    highlighted: false,
    ctaText: 'Join VIP',
  },
];
