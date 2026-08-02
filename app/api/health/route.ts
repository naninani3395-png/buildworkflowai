import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'BuildFlow AI API',
    message: 'Backend health endpoint ready.',
  });
}
