import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from AZ Fitness — the gym, training sessions, boxing, tennis, and community.',
};
export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
