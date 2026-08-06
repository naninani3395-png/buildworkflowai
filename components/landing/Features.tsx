'use client';

import { CheckCircle, ClipboardList, FileText, Layers, MapPin, PieChart, ShieldCheck, ShieldHalf, Truck, Users, Wallet, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Project Tracking', description: 'Monitor schedules, milestones, and delays from one dashboard.', icon: ClipboardList },
  { title: 'Inventory Control', description: 'Track materials, orders, and stock levels in real time.', icon: Truck },
  { title: 'Team Attendance', description: 'See labor availability, shift coverage, and attendance trends.', icon: Users },
  { title: 'Financial Visibility', description: 'Budget, invoices, and cost reports for every project.', icon: Wallet },
  { title: 'AI Alerts', description: 'Receive intelligent risk alerts and recovery plans automatically.', icon: Zap },
  { title: 'Compliance', description: 'Manage permits, approvals, and safety checklists with confidence.', icon: ShieldCheck },
  { title: 'Supplier Management', description: 'Keep vendors, invoices, and delivery windows synchronized.', icon: MapPin },
  { title: 'Reports & Insights', description: 'Generate executive summaries and field-level reports instantly.', icon: PieChart },
  { title: 'Document Control', description: 'Store contracts, invoices, and drawings in a secure hub.', icon: FileText },
  { title: 'Field Collaboration', description: 'Streamline handoffs between site teams and project managers.', icon: Layers },
  { title: 'Quality Checks', description: 'Standardize inspections and issue tracking across jobsites.', icon: ShieldHalf },
  { title: 'Executive View', description: 'A single pane of glass for leadership with high-level KPIs.', icon: CheckCircle },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-12 grid gap-4 md:grid-cols-[0.65fr_0.35fr] md:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Construction modules</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            All the tools your project teams need in one platform.
          </h2>
        </div>
        <p className="text-sm leading-7 text-slate-300">
          From field operations to executive analytics, BuildFlow AI centralizes workflows so teams stay aligned, compliant, and ahead of risk.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-500/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
