'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Space Design helped our team cut manual reporting by 70% and keep everyone aligned on critical project milestones.',
    name: 'Alicia M.',
    role: 'Senior Project Manager',
  },
  {
    quote: 'The AI alerts are a game changer for vendor follow-ups and avoiding schedule delays.',
    name: 'Michael S.',
    role: 'Construction Director',
  },
  {
    quote: 'We finally have a single source of truth for budgets, attendance, and procurement.',
    name: 'Priya K.',
    role: 'Operations Lead',
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Trusted by modern construction teams.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 text-slate-300 shadow-soft"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-brand-200">
              <Star size={18} className="text-yellow-400" />
              <span className="text-sm uppercase tracking-[0.3em]">5.0</span>
            </div>
            <p className="text-base leading-7 text-slate-200">“{item.quote}”</p>
            <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-400">
              <p className="font-semibold text-white">{item.name}</p>
              <p>{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
