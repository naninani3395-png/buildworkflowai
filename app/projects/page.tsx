'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { demoProjects, type Project } from '@/lib/demo-data';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(demoProjects);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100 lg:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Projects</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Construction project portfolio</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 font-semibold text-white">
            <Plus size={16} /> Add Project
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">{project.name}</h2>
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm text-brand-200">{project.status}</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">Client: {project.client}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-brand-500" style={{ width: `${project.progress}%` }} />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                <span>Budget: {project.budget}</span>
                <span>{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
