import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about AZ Fitness — memberships, training, boxing, tennis, nutrition, and more.',
};
export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
