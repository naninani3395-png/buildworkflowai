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
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <nav className="mx-auto flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-900/80 px-6 py-4 shadow-soft backdrop-blur transition">
      <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold text-white">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/10 p-1">
          <Image src="/logo.png" alt="Space Design logo" width={36} height={36} className="object-contain" />
        </div>
        <span>Space Design</span>
      </Link>

      <div className="hidden items-center justify-center gap-3 whitespace-nowrap text-sm text-slate-300 md:flex md:space-x-5">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
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
