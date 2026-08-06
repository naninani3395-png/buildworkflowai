'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600',
  secondary: 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
  ghost: 'text-white hover:text-brand-200',
};

export function LinkButton({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
