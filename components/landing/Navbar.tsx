'use client';

import Link from 'next/link';
import { Building2, Globe, Sparkles } from 'lucide-react';

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
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-white/10 bg-slate-900/80 px-5 py-4 shadow-soft backdrop-blur transition">
      <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
        <span className="rounded-full bg-brand-500/20 p-2 text-brand-500">
          <Building2 size={18} />
        </span>
        BuildFlow AI
      </Link>

      <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="transition hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link href="/auth/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-500/40 hover:text-white">
          Sign In
        </Link>
        <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
