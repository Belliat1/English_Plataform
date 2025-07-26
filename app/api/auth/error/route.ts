import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ error: 'Auth error' }, { status: 200 });
}
