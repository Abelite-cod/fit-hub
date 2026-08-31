import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Shop',
  description: 'AZ Fitness branded gym wear, training equipment and accessories. Shop online or visit us in Ile-Ife, Osun State.',
};
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
