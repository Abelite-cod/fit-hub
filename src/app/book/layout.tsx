import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Book / Enquire',
  description: 'Book a session or send an enquiry to AZ Fitness. Personal training, boxing, group training, membership, and more.',
};
export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
