'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useAuthStore } from '@/lib/auth-store';

const steps = [
  'Create your company workspace',
  'Connect projects and clients',
  'Review AI insights and recommendations',
  'Open the dashboard',
];

export default function OnboardingPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const stepsCompleted = useMemo(() => (user ? 3 : 0), [user]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Welcome aboard</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Your BuildFlow AI workflow starts here.</h1>
        <p className="mt-2 text-sm text-slate-400">Complete these guided steps to enter the dashboard and use the AI assistant.</p>

        <div className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <div key={step} className={`rounded-2xl border px-4 py-3 ${index < stepsCompleted ? 'border-emerald-400/30 bg-emerald-500/10' : 'border-white/10 bg-slate-950/70'}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-200">{step}</span>
                <span className="text-sm text-slate-400">{index < stepsCompleted ? 'Complete' : 'Pending'}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-full bg-brand-500 px-5 py-3 font-semibold text-white">Go to dashboard</Link>
          <button onClick={() => router.push('/dashboard')} className="rounded-full border border-white/10 px-5 py-3 font-semibold text-slate-200">Continue</button>
        </div>
      </div>
    </main>
  );
}
