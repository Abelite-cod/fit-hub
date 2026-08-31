export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-hours',
    question: 'What are your opening hours?',
    answer: 'AZ Fitness is open Monday to Friday from 7:00 AM to 7:00 PM, and Saturday from 7:00 AM to 12:00 PM. We are closed on Sundays.',
    category: 'General',
  },
  {
    id: 'faq-location',
    question: 'Where is AZ Fitness located?',
    answer: 'We are located at Powerline Junction, Ajebamidele Area, Ile-Ife, Osun State, Nigeria. You can use our directions link to find us on Google Maps.',
    category: 'General',
  },
  {
    id: 'faq-beginners',
    question: 'I have never trained at a gym before. Can I join?',
    answer: "Absolutely. AZ Fitness welcomes complete beginners. When you join, we'll take time to understand your goals and point you toward the right training approach. You will not be left to figure things out on your own.",
    category: 'General',
  },
  {
    id: 'faq-membership-types',
    question: 'What membership options do you have?',
    answer: 'We offer three membership plans: Starter (monthly), Performance (monthly with additional coaching), and Annual (best value, includes extended personal training and nutrition support). See our Memberships page for full details.',
    category: 'Memberships',
  },
  {
    id: 'faq-join',
    question: 'How do I join AZ Fitness?',
    answer: "You can enquire through our website booking form, send us a WhatsApp message, or simply come into the gym during opening hours. We'll walk you through the membership options and get you started.",
    category: 'Memberships',
  },
  {
    id: 'faq-personal-training',
    question: 'How does personal training work?',
    answer: 'Personal training at AZ Fitness is one-on-one coaching tailored entirely to your goals. Your trainer will build a programme around you and work with you directly during sessions. You can book personal training as part of a Performance or Annual membership, or as standalone sessions.',
    category: 'Training',
  },
  {
    id: 'faq-boxing',
    question: 'Do I need boxing experience to join boxing training?',
    answer: "No experience is needed. Our boxing sessions cover fundamentals including stance, footwork, punch technique, defence, and conditioning. Whether you're a complete beginner or have some background, we work with you at your level.",
    category: 'Training',
  },
  {
    id: 'faq-group-training',
    question: 'What happens in group training sessions?',
    answer: 'Group training sessions are trainer-led classes covering a variety of formats including body conditioning, circuits, and aerobics. Sessions are structured, inclusive, and suitable for different fitness levels. Check our schedule for class times.',
    category: 'Training',
  },
  {
    id: 'faq-tennis',
    question: 'Is the tennis court an extra cost?',
    answer: "No. The tennis court at AZ Fitness is a free recreational facility for all members. There is no additional charge — it's included in your membership. Court time can be arranged at reception.",
    category: 'Facilities',
  },
  {
    id: 'faq-nutrition',
    question: 'Do you offer nutrition advice?',
    answer: 'Yes. AZ Fitness provides nutritional guidance to support your training goals. This includes nutritional assessments, meal planning guidance, and supplement advice. Nutrition services are available to members, with full plans included in Performance and Annual memberships.',
    category: 'Wellness',
  },
  {
    id: 'faq-massage',
    question: 'Do you have massage services?',
    answer: 'Yes. We offer sports and deep tissue massage to support recovery. Sessions can be booked separately or are available as part of certain membership packages.',
    category: 'Wellness',
  },
  {
    id: 'faq-shop',
    question: 'Can I buy AZ Fitness gear?',
    answer: 'Yes. Our online shop stocks AZ Fitness branded gym wear (tees, shorts, hoodies) as well as training equipment and accessories. You can also purchase in person at the gym.',
    category: 'Shop',
  },
];
