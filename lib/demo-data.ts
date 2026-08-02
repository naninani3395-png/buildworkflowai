export type Project = {
  id: string;
  name: string;
  client: string;
  status: 'Planning' | 'In Progress' | 'Delayed' | 'Completed';
  progress: number;
  budget: string;
  startDate: string;
  endDate: string;
};

export const demoProjects: Project[] = [
  {
    id: 'PRJ-1001',
    name: 'Harbor View Towers',
    client: 'Northstar Developers',
    status: 'In Progress',
    progress: 72,
    budget: '₹4.8 Cr',
    startDate: '2025-01-10',
    endDate: '2026-07-30',
  },
  {
    id: 'PRJ-1002',
    name: 'Metro Link Expansion',
    client: 'Urban Infra Ltd',
    status: 'Delayed',
    progress: 54,
    budget: '₹7.2 Cr',
    startDate: '2024-11-02',
    endDate: '2026-06-20',
  },
  {
    id: 'PRJ-1003',
    name: 'Greenline Residences',
    client: 'Apex Builders',
    status: 'Completed',
    progress: 100,
    budget: '₹3.1 Cr',
    startDate: '2024-03-12',
    endDate: '2025-12-15',
  },
];

export const demoInsights = [
  'Steel procurement needs follow-up in the next 48 hours.',
  'Two invoices are pending approval.',
  'Attendance is below target for Site Team A.',
];
