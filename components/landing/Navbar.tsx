'use client';

import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI', href: '#ai' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <nav className="mx-auto flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-900/80 px-6 py-4 shadow-soft backdrop-blur transition">
      <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold text-white">
        <span>Space Design</span>
      </Link>

      <div className="hidden items-center gap-3 text-sm text-white md:flex md:gap-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <LinkButton href="/auth/login" variant="secondary">
          Sign In
        </LinkButton>
        <LinkButton href="/auth/signup">
          Get Started
        </LinkButton>
      </div>
    </nav>
  );
}
