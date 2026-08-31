export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
}

export const trainers: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Trainer Name',
    role: 'Head Coach',
    bio: 'Placeholder: Experienced fitness coach with a background in strength training and conditioning. Passionate about helping members achieve their goals safely and consistently.',
    specialties: ['Strength Training', 'Body Conditioning', 'Weight Loss'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop',
  },
  {
    id: 'trainer-2',
    name: 'Trainer Name',
    role: 'Boxing Coach',
    bio: 'Placeholder: Experienced boxing coach with competitive and coaching background. Teaches proper technique, footwork, and boxing-specific conditioning.',
    specialties: ['Boxing', 'Cardio & Conditioning', 'Specific Training'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
  },
  {
    id: 'trainer-3',
    name: 'Trainer Name',
    role: 'Personal Trainer & Nutritionist',
    bio: 'Placeholder: Certified personal trainer with a focus on goal-specific programming and nutritional guidance. Works with clients on both training and lifestyle.',
    specialties: ['Personal Training', 'Nutrition', 'Weight Management'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
  },
];
