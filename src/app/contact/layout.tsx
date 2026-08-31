import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AZ Fitness in Ile-Ife, Osun State. Visit us, call, WhatsApp, or send a message.',
};
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
