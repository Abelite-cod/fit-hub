import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => string;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1, size) => {
        const existing = get().items.find(
          (item) => item.product.id === product.id && item.selectedSize === size
        );
        if (existing) {
          set({
            items: get().items.map((item) =>
              item.product.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ items: [...get().items, { product, quantity, selectedSize: size }] });
        }
      },
      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item.product.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      totalPrice: () => '₦XX,XXX',
    }),
    { name: 'az-fitness-cart' }
  )
);
