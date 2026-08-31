'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { clsx } from 'clsx';

const trainingDropdown = [
  { label: 'All Training', href: '/training' },
  { label: 'Group Training', href: '/group-training' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Nutrition & Wellness', href: '/nutrition-wellness' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training', dropdown: trainingDropdown },
  { label: 'Boxing', href: '/boxing' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'Shop', href: '/shop' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.totalItems());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || isOpen
            ? 'bg-az-black border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-wide section-padding flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <span className="text-az-green font-black text-2xl tracking-tight">AZ</span>
            <span className="text-az-offwhite font-bold text-lg tracking-widest uppercase">FITNESS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.href} className="relative group">
                    <button
                      className={clsx(
                        'flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200',
                        pathname.startsWith('/training') ||
                          pathname === '/group-training' ||
                          pathname === '/facilities' ||
                          pathname === '/nutrition-wellness'
                          ? 'text-az-green'
                          : 'text-az-offwhite/80 hover:text-az-offwhite'
                      )}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    <div
                      className="absolute top-full left-0 mt-2 w-52 bg-az-charcoal border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={clsx(
                            'block px-4 py-3 text-sm transition-colors duration-150',
                            pathname === item.href
                              ? 'text-az-green bg-white/5'
                              : 'text-az-offwhite/80 hover:text-az-offwhite hover:bg-white/5'
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'text-sm font-medium tracking-wide transition-colors duration-200',
                    pathname === link.href
                      ? 'text-az-green'
                      : 'text-az-offwhite/80 hover:text-az-offwhite'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              href="/cart"
              className="relative text-az-offwhite/80 hover:text-az-offwhite transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-az-green text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              href="/book"
              className="bg-az-green text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-az-green-deep transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex xl:hidden items-center gap-3">
            <Link
              href="/cart"
              className="relative text-az-offwhite/80 hover:text-az-offwhite transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-az-green text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-az-offwhite p-1"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-az-black pt-20 overflow-y-auto">
          <nav
            className="section-padding py-8 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'block py-4 text-xl font-bold uppercase tracking-wide border-b border-white/10 transition-colors',
                    pathname === link.href ? 'text-az-green' : 'text-az-offwhite'
                  )}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mb-2">
                    {link.dropdown.slice(1).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-az-offwhite/60 hover:text-az-offwhite transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/book"
              className="mt-6 bg-az-green text-white text-sm font-semibold tracking-widest uppercase px-6 py-4 text-center hover:bg-az-green-deep transition-colors"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
