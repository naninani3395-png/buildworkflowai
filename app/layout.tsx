import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BuildFlow AI | Construction ERP',
  description: 'An AI-powered construction management platform inspired by modern enterprise SaaS products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
