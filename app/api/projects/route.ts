import { NextResponse } from 'next/server';
import { demoProjects } from '@/lib/demo-data';

export async function GET() {
  return NextResponse.json(demoProjects);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newProject = {
    id: `PRJ-${Math.floor(1000 + Math.random() * 9000)}`,
    ...body,
  };

  return NextResponse.json(newProject, { status: 201 });
}
