'use client';

import { LayoutDashboard, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Operational visibility',
    description: 'See project health, budgets, and supplier status in one clean dashboard.',
    icon: LayoutDashboard,
  },
  {
    title: 'Automated procurement',
    description: 'Stay ahead of material deliveries and reduce schedule risk with actionable alerts.',
    icon: Truck,
  },
  {
    title: 'AI decision support',
    description: 'Get prescriptive recommendations for delays, staffing, and cost control.',
    icon: Sparkles,
  },
  {
    title: 'Compliance & safety',
    description: 'Track safety checklists, permits, and team certifications with confidence.',
    icon: ShieldCheck,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Solutions</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Essential workflows for modern construction teams.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          BuildFlow AI delivers streamlined operations, actionable procurement control, and AI-backed project risk management.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-500/30"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{solution.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
