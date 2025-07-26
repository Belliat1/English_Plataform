// app/api/auth/csrf/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ csrfToken: 'fake-token' });
}
