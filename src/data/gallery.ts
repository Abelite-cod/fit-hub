export type GalleryCategory = 'The Gym' | 'Training' | 'Boxing' | 'Tennis' | 'Community' | 'Gym Wear' | 'Equipment';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', alt: 'AZ Fitness gym floor with weights equipment', category: 'The Gym', width: 800, height: 600 },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop', alt: 'Member training with resistance bands', category: 'Training', width: 800, height: 1000 },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop', alt: 'Boxing training at AZ Fitness', category: 'Boxing', width: 800, height: 600 },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=1000&fit=crop', alt: 'Boxing gloves and training equipment', category: 'Boxing', width: 800, height: 1000 },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop', alt: 'Tennis court at AZ Fitness', category: 'Tennis', width: 800, height: 600 },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop', alt: 'Group training class in session', category: 'Community', width: 800, height: 600 },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=1000&fit=crop', alt: 'Member lifting weights in the gym', category: 'Training', width: 800, height: 1000 },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', alt: 'AZ Fitness gym equipment area', category: 'The Gym', width: 800, height: 600 },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop', alt: 'AZ Fitness training tee', category: 'Gym Wear', width: 800, height: 1000 },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop', alt: 'Training equipment at AZ Fitness', category: 'Equipment', width: 800, height: 600 },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=1000&fit=crop', alt: 'Personal training session', category: 'Training', width: 800, height: 1000 },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop', alt: 'Community group workout', category: 'Community', width: 800, height: 600 },
];
