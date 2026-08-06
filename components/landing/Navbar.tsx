'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI', href: '#ai' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-white/10 bg-slate-900/80 px-6 py-4 shadow-soft backdrop-blur transition">
      <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/5">
          <Image src="/space-design-logo.svg" alt="Space Design Logo" fill className="object-contain p-2" />
        </div>
        Space Design
      </Link>

      <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="transition hover:text-white">
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
