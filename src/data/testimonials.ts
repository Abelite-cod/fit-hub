// NOTE: These are placeholder testimonials. Replace with real member testimonials before launch.
export interface Testimonial {
  id: string;
  name: string;
  memberSince: string;
  quote: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Member Name',
    memberSince: 'Member since 2023',
    quote: "Placeholder testimonial: Training at AZ Fitness has made a real difference. The environment is serious but welcoming, and the coaches know what they're doing.",
    service: 'Personal Training',
  },
  {
    id: 't2',
    name: 'Member Name',
    memberSince: 'Member since 2022',
    quote: "Placeholder testimonial: I've been doing boxing here for over a year. The technique coaching is genuine and the conditioning sessions are tough in the best way.",
    service: 'Boxing',
  },
  {
    id: 't3',
    name: 'Member Name',
    memberSince: 'Member since 2024',
    quote: 'Placeholder testimonial: I started as a complete beginner and the trainers made sure I was training correctly from day one. Consistent progress since joining.',
    service: 'Strength Training',
  },
  {
    id: 't4',
    name: 'Member Name',
    memberSince: 'Member since 2023',
    quote: 'Placeholder testimonial: The group training sessions are energetic and well-structured. Great way to push yourself when you need that extra motivation.',
    service: 'Group Training',
  },
];
