'use client';

const roadmapPhases = [
  {
    phase: 'Launch Essentials',
    details: [
      'Core project planning and schedule tracking',
      'Real-time procurement visibility',
      'Team attendance and task coordination',
    ],
  },
  {
    phase: 'Field Operations',
    details: [
      'Mobile-ready site updates and logs',
      'Supplier and delivery management',
      'Safety checks and compliance workflows',
    ],
  },
  {
    phase: 'AI Insights',
    details: [
      'Delay detection and risk alerts',
      'Automated next-step recommendations',
      'Executive analytics dashboards',
    ],
  },
  {
    phase: 'Enterprise Scale',
    details: [
      'Multi-site operations and permissions',
      'Custom reports and dashboards',
      'SLA-ready support and integrations',
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Roadmap</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">BuildFlow AI product roadmap</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            A clean product roadmap focused on construction operations, procurement, AI insights, and enterprise readiness.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {roadmapPhases.map((phase) => (
            <div key={phase.phase} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-200">{phase.phase}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {phase.details.map((detail) => (
                  <li key={detail} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
