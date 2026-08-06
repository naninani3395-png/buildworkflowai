'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  { question: 'What is Space Design?', answer: 'Space Design is an AI-driven construction ERP that centralizes project planning, procurement, attendance, and reporting in one platform.' },
  { question: 'How secure is my project data?', answer: 'We protect data with modern encryption, role-based access control, and strict permission policies for every project and team.' },
  { question: 'Can my team collaborate across sites?', answer: 'Yes. Teams can share updates, documents, and issue-level communications across all active jobs and sites.' },
  { question: 'Does AI use my data?', answer: 'AI insights are generated from your project data only and are not used for external training without your permission.' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="resources" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">FAQs</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Common questions from construction teams.
        </h2>
      </div>

      <div className="grid gap-4">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <motion.button
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="group w-full rounded-[1.75rem] border border-white/10 bg-slate-900/70 px-6 py-5 text-left text-slate-300 transition hover:border-brand-500/30"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-white">{item.question}</span>
                <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              {isOpen ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p> : null}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
