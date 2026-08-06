'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const logos = ['ACME', 'Jupiter', 'Stratus', 'Horizon'];

export function Hero() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-200">
            <Sparkles size={16} /> AI-powered construction ERP
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Construction · AI · Operations</p>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Build smarter projects with a single AI-first command center.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Track schedules, procurement, labor, and risk in one dashboard while AI surfaced recommendations keep teams aligned and costs under control.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-semibold text-white transition hover:bg-brand-600">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="#features" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-brand-500/40 hover:text-white">
              Explore Features
            </Link>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 sm:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Trusted by</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-white">
                {logos.map((logo) => (
                  <span key={logo} className="rounded-full bg-white/5 px-3 py-2">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-brand-500/15 to-slate-900 p-4 text-sm text-slate-300">
              <p className="font-semibold text-white">24/7 AI support</p>
              <p className="mt-1 text-slate-400">Instant insights for every construction milestone.</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-4 text-sm text-slate-300">
              <p className="font-semibold text-white">150+ projects tracked</p>
              <p className="mt-1 text-slate-400">From workforce planning to closeout dashboards.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft"
        >
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-500 via-slate-500 to-slate-900" />
          <div className="relative grid gap-4 rounded-[1.75rem] bg-slate-900/95 p-6">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span className="font-medium text-white">BuildFlow Dashboard</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                <BarChart3 size={16} /> Live metrics
              </span>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Projects</p>
                  <p className="mt-3 text-3xl font-semibold text-white">28</p>
                  <p className="mt-2 text-sm text-slate-400">Active jobs in progress</p>
                </div>
                <div className="rounded-3xl bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Procurement</p>
                  <p className="mt-3 text-3xl font-semibold text-white">$1.9M</p>
                  <p className="mt-2 text-sm text-slate-400">Materials committed this month</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="text-slate-500">On-time</p>
                  <p className="mt-2 text-xl font-semibold text-white">93%</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="text-slate-500">Labor</p>
                  <p className="mt-2 text-xl font-semibold text-white">182</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="text-slate-500">Alerts</p>
                  <p className="mt-2 text-xl font-semibold text-white">7</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-slate-950/95 p-5">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>AI recommendation</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Risk alert
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-200">
                “The West Ridge tower needs a vendor follow-up for concrete deliveries before Friday to avoid a 24-hour delay.”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
