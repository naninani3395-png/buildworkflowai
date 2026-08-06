'use client';

import { Activity, Box, CalendarDays, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Plan with clarity',
    description: 'Define schedules, milestones, and budgets in one unified workspace.',
    icon: CalendarDays,
  },
  {
    title: 'Source materials',
    description: 'Track procurement, deliveries, and stock across every site.',
    icon: Box,
  },
  {
    title: 'Coordinate crews',
    description: 'Keep field teams aligned with real-time attendance and tasks.',
    icon: Users,
  },
  {
    title: 'Resolve faster',
    description: 'Use AI alerts to avoid delays and make smarter decisions instantly.',
    icon: Activity,
  },
];

export function Workflow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Workflow</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          The full construction workflow, stepped and simplified.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          BuildFlow AI guides teams from planning to completion with a clear process, fewer bottlenecks, and better outcomes.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-500/30"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-300">
                <Icon size={24} />
              </div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Step {index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
