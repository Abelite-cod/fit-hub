import { clsx } from 'clsx';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className,
  disabled,
  external,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wider uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-az-green disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-az-green text-white hover:bg-az-green-deep',
    secondary: 'bg-az-offwhite text-az-black hover:bg-az-neutral',
    outline: 'border-2 border-az-green text-az-green hover:bg-az-green hover:text-white',
    ghost: 'border border-white/20 text-az-offwhite hover:border-white hover:text-white',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-sm px-8 py-4',
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
