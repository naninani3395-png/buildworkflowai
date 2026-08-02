'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Activity, ArrowUpRight, BadgeDollarSign, Briefcase, ClipboardList, Sparkles, Truck } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAuthStore } from '@/lib/auth-store';

const revenueData = [
  { name: 'Jan', value: 24 },
  { name: 'Feb', value: 31 },
  { name: 'Mar', value: 29 },
  { name: 'Apr', value: 37 },
  { name: 'May', value: 46 },
  { name: 'Jun', value: 56 },
];

const taskList = [
  { title: 'Approve vendor invoice', owner: 'Asha', priority: 'High' },
  { title: 'Site inspection checklist', owner: 'Ravi', priority: 'Medium' },
  { title: 'Client payment follow-up', owner: 'Nina', priority: 'High' },
];

export default function DashboardPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [prompt, setPrompt] = useState('Show delayed projects');
  const [assistantAnswer, setAssistantAnswer] = useState('4 delayed projects detected. Metro Link Expansion is the highest priority.');

  useEffect(() => {
    if (!user?.isAuthenticated) {
      router.replace('/auth/login');
    }
  }, [user, router]);

  const greeting = useMemo(() => (user ? `Welcome back, ${user.name.split(' ')[0]}` : 'Welcome'), [user]);

  const askAssistant = async () => {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setAssistantAnswer(data.answer);
  };

  if (!user?.isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100 lg:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Operations Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{greeting}</h1>
            <p className="mt-2 text-sm text-slate-400">Your BuildFlow AI workspace for projects, finance, and operations.</p>
          </div>
          <div className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
            Signed in as {user?.email}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Revenue', value: '₹54.2L', change: '+12.4%', icon: BadgeDollarSign },
            { label: 'Projects', value: '128', change: '+6', icon: Briefcase },
            { label: 'Active Tasks', value: '84', change: '10 due today', icon: ClipboardList },
            { label: 'Materials', value: '14 SKUs', change: '2 low stock', icon: Truck },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">{card.label}</p>
                  <div className="rounded-full bg-brand-500/10 p-2 text-brand-300">
                    <Icon size={18} />
                  </div>
                </div>
                <p className="mt-4 text-2xl font-semibold text-white">{card.value}</p>
                <p className="mt-2 flex items-center gap-1 text-sm text-emerald-300">
                  <ArrowUpRight size={16} /> {card.change}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Revenue Performance</p>
                <h2 className="text-xl font-semibold text-white">Monthly growth</h2>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">Healthy trend</div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2767ff" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#2767ff" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#60a5fa" fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">BuildFlow AI Assistant</p>
                <h2 className="text-xl font-semibold text-white">Dashboard intelligence</h2>
              </div>
              <div className="rounded-full bg-brand-500/10 p-2 text-brand-300">
                <Sparkles size={18} />
              </div>
            </div>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="min-h-24 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white" />
            <button onClick={askAssistant} className="mt-3 rounded-full bg-brand-500 px-4 py-2 font-semibold text-white">Ask AI</button>
            <div className="mt-4 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">AI response</p>
              <p className="mt-2 leading-7">{assistantAnswer}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Today&apos;s Tasks</p>
              <h2 className="text-xl font-semibold text-white">Prioritized actions</h2>
            </div>
            <div className="text-sm text-slate-400">3 pending</div>
          </div>
          <div className="space-y-3">
            {taskList.map((task) => (
              <div key={task.title} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-white">{task.title}</p>
                  <p className="text-sm text-slate-400">Owner: {task.owner}</p>
                </div>
                <div className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-sm text-brand-200">{task.priority}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
