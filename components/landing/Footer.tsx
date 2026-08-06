'use client';

import Link from 'next/link';
import { Building2 } from 'lucide-react';

const footerLinks = [
  { label: 'Product', items: ['Features', 'Pricing', 'Roadmap'] },
  { label: 'Company', items: ['About', 'Careers', 'Contact'] },
  { label: 'Support', items: ['Help Center', 'Privacy', 'Terms'] },
];

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white">
            <span className="rounded-full bg-brand-500/20 p-2 text-brand-500">
              <Building2 size={18} />
            </span>
            <span className="text-lg font-semibold">BuildFlow AI</span>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            AI-driven construction workflows, procurement visibility, and real-time project intelligence for modern builders.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.label}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">{section.label}</p>
              <div className="space-y-3 text-sm text-slate-300">
                {section.items.map((item) => (
                  <Link key={item} href={item === 'Roadmap' ? '/roadmap' : item === 'Contact' ? '#contact' : '/'} className="block transition hover:text-white">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-sm text-slate-500">© 2026 BuildFlow AI. All rights reserved.</p>
    </footer>
  );
}
