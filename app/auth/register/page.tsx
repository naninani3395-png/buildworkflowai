'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">New workspace</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Create your account</h1>
        <p className="mt-2 text-sm text-slate-400">Start your construction intelligence workspace.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Name</label>
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Company</label>
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white" value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <button className="w-full rounded-2xl bg-brand-500 px-4 py-3 font-semibold text-white transition hover:bg-brand-600">
            Create workspace
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-400">
          Already registered?{' '}
          <Link href="/auth/login" className="text-brand-200">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
