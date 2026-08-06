'use client';

import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For small contracting teams that want smarter planning.',
    benefits: ['Project tracking', 'AI alerts', 'Team dashboard'],
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'For growing builders who need procurement and reporting.',
    benefits: ['Inventory control', 'Supplier management', 'Finance insights'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For enterprise operations with dedicated onboarding.',
    benefits: ['Custom integrations', 'Role-based security', 'SLA support'],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Pricing</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Plans built for construction workflows.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Choose the package that matches your scale, from startup crews to enterprise builders with multiple sites.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className={`rounded-[2rem] border p-6 text-slate-300 shadow-soft transition hover:-translate-y-1 ${plan.featured ? 'border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-slate-900' : 'border-white/10 bg-slate-900/70'}`}
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">{plan.name}</span>
              {plan.featured ? (
                <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs uppercase tracking-[0.35em] text-brand-200">Most popular</span>
              ) : null}
            </div>
            <p className="text-5xl font-semibold text-white">{plan.price}</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {plan.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Sparkles size={16} className="text-brand-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" variant="primary">
              Choose plan <ArrowUpRight size={16} />
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
