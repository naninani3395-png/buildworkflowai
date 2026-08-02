'use client';

const milestones = [
  { title: 'Foundation', items: ['SRS', 'Architecture', 'Workspace setup'] },
  { title: 'Frontend', items: ['Next.js', 'Tailwind', 'Dashboard', 'Routing'] },
  { title: 'Core Modules', items: ['Projects', 'Employees', 'Inventory', 'Finance'] },
  { title: 'AI & Deployment', items: ['Gemini integration', 'Vercel', 'GitHub workflow'] },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100 lg:p-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Roadmap</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">BuildFlow AI development roadmap</h1>
        <p className="mt-2 text-sm text-slate-400">This project is now structured as a real SaaS product journey, not a single-page demo.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <h2 className="text-xl font-semibold text-white">{milestone.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {milestone.items.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
