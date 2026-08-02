'use client';

import { useState } from 'react';

const sampleQuestions = ['Show delayed projects', 'Generate invoice summary', 'Which employee has highest workload?'];

export default function AIAssistantPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('Ask the assistant about projects, invoices, attendance, or inventory.');

  const handleAsk = async () => {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await res.json();
    setResponse(data.answer);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100 lg:p-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">AI Copilot</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Construction intelligence assistant</h1>
        <p className="mt-2 text-sm text-slate-400">Built for project delays, work allocation, finance summaries, inventory checks, and executive reporting.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <h2 className="text-lg font-semibold text-white">Example prompts</h2>
            <div className="mt-4 space-y-2">
              {sampleQuestions.map((question) => (
                <button key={question} onClick={() => setInput(question)} className="block w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-left text-sm text-slate-300 hover:border-brand-500/30">
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything about your projects..." className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none" />
            <button onClick={handleAsk} className="mt-4 rounded-full bg-brand-500 px-4 py-2 font-semibold text-white">Ask AI</button>
            <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Assistant response</p>
              <p className="mt-2 leading-7">{response}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
