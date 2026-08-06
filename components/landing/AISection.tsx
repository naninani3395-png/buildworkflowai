'use client';

import { ArrowRight, Bot, MessageSquare, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const aiSteps = [
  { role: 'User', text: 'Show delayed projects with pending invoices.' },
  { role: 'Assistant', text: '3 projects are delayed. Recommend increasing concrete buffer for West Ridge and fast-tracking vendor approvals.' },
];

export function AISection() {
  return (
    <section id="ai" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-brand-200">AI Copilot</p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Ask questions in plain language. Get construction-ready plans.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            BuildFlow AI turns project data into immediate decisions. Drill into delays, staffing, budgets, and supplier risk without opening reports.
          </p>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-slate-300">
            <div className="flex items-center justify-between gap-3 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-2 text-slate-200">
                <Bot size={16} /> Live AI Chat
              </div>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                Instant
              </span>
            </div>
            <div className="space-y-4">
              {aiSteps.map((step) => (
                <div key={step.role} className="rounded-3xl bg-slate-950/80 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                    {step.role}
                  </div>
                  <p className="text-sm leading-7 text-slate-100">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
              <ArrowRight size={18} /> Predictive risk and delivery guidance for every phase.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft"
        >
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>AI assistant</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-400">
              <MessageSquare size={14} /> Conversation
            </span>
          </div>
          <div className="mt-6 space-y-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/95 p-5">
              <p className="text-sm font-semibold text-white">User</p>
              <p className="mt-3 text-base leading-7 text-slate-200">Show a quick overview of delayed projects and next steps.</p>
            </div>
            <div className="rounded-[1.75rem] border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-slate-900 p-5">
              <p className="text-sm font-semibold text-brand-100">AI</p>
              <p className="mt-3 text-base leading-7 text-white">
                3 delayed projects. Recommended: expedite vendor approvals, increase concrete buffer, and assign a field coordinator for the West Ridge job.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                <p className="text-slate-500">Suggested action</p>
                <p className="mt-2 text-white">Increase steel supply buffer by 20% this week.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                <p className="text-slate-500">Result</p>
                <p className="mt-2 text-white">Avoid schedule risk before the next supplier review.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
