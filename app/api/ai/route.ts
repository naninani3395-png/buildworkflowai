import { NextResponse } from 'next/server';
import { demoInsights } from '@/lib/demo-data';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
  }

  const normalized = String(prompt).toLowerCase();
  let answer = 'I can help summarize projects, invoices, attendance, and inventory.';

  if (normalized.includes('delay') || normalized.includes('delayed')) {
    answer = 'Three projects are currently delayed, with the highest risk on Metro Link Expansion due to material shortages.';
  } else if (normalized.includes('invoice')) {
    answer = 'Two invoices are pending review, and one client payment is overdue.';
  } else if (normalized.includes('attendance')) {
    answer = 'Attendance is below target for Site Team A and needs follow-up this week.';
  }

  return NextResponse.json({
    answer,
    insights: demoInsights,
    source: 'demo-mode',
  });
}
