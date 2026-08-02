'use client';

import Link from 'next/link';
import { ArrowRight, Bot, Building2, ChartNoAxesCombined, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Delayed Projects', value: '4' },
  { label: 'AI Recommendations', value: '24/7' },
  { label: 'On-time Delivery', value: '93%' },
];

const features = [
  {
    title: 'AI Copilot',
    description: 'Ask questions like “Show delayed projects” and receive insight-driven answers from your live construction data.',
    icon: Bot,
  },
  {
    title: 'Live Project Intelligence',
    description: 'Monitor projects, materials, attendance, invoices, and recommendations in one command center.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Enterprise-Grade Workflow',
    description: 'Designed for multi-company SaaS-style operations with role-based views and AI-assisted decision making.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-8 lg:px-10">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-3 text-sm font-semibold text-white">
            <div className="rounded-full bg-brand-500/20 p-2 text-brand-500">
              <Building2 size={18} />
            </div>
            BuildFlow AI
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <Link href="#features" className="hover:text-white">Features</Link>
            <Link href="/roadmap" className="hover:text-white">Roadmap</Link>
            <Link href="/ai" className="hover:text-white">AI</Link>
            <Link href="/dashboard" className="rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 font-medium text-brand-200 transition hover:bg-brand-500/20">
              Open Dashboard
            </Link>
          </div>
        </nav>

        <div className="grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-sm text-brand-200">
              <Sparkles size={16} /> AI-powered construction ERP
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Build Smarter. Manage Better.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              BuildFlow AI is an AI-powered construction ERP and project management platform that helps teams understand delays, costs, attendance, inventory, and next-best actions with real-time intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-semibold text-white transition hover:bg-brand-600">
                Sign Up <ArrowRight size={18} />
              </Link>
              <Link href="/auth/login" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-brand-500/40 hover:text-white">
                Sign In
              </Link>
              <Link href="#features" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-brand-500/40 hover:text-white">
                View Features
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft">
            <div className="rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/20 to-slate-800 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Executive Summary</p>
                  <p className="text-2xl font-semibold text-white">Q3 Delivery Pulse</p>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">+12.4%</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
                <div className="mb-2 flex items-center gap-2 text-brand-200">
                  <Bot size={16} /> AI Copilot says: <span className="text-white">Metro Link Expansion needs vendor follow-up.</span>
                </div>
                <p className="text-slate-400">Suggested action: increase steel and concrete procurement buffer by 20% this week.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Platform Modules</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Everything a modern construction team needs to run smarter.</h2>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 md:block">
            Built with Next.js, TypeScript, Tailwind, and AI-ready APIs
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-brand-500/10 p-3 text-brand-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-brand-500/15 to-slate-900 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Portfolio Ready</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Go from idea to an impressive full-stack showcase.</h3>
            </div>
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
              <Users size={18} /> Launch app demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
