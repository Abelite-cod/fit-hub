import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Checkout', description: 'Complete your AZ Fitness shop order.' };
export default function CheckoutLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
