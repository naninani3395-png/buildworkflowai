'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthStore } from '@/lib/auth-store';

export default function SignupPage() {
  const router = useRouter();
  const signUp = useAuthStore((state) => state.signUp);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = signUp(name, email, company, password);
    if (!ok) {
      setError('Please fill in all fields.');
      return;
    }
    router.push('/onboarding');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Create account</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Start your BuildFlow workspace</h1>
        <p className="mt-2 text-sm text-slate-400">Join the AI-first construction operations platform.</p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          <button className="w-full rounded-2xl bg-brand-500 px-4 py-3 font-semibold text-white">Create account</button>
        </form>
        <div className="mt-6 text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-brand-200">Sign in</Link>
        </div>
      </div>
    </main>
  );
}
