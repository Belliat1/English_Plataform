// app/api/auth/signin/credentials/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const email = body.get('email')?.toString();
  const password = body.get('password')?.toString();

  if (!email || !password) {
    return NextResponse.redirect(new URL('/login?error=MissingCredentials', req.url));
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/manual-login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!data.ok) {
    return NextResponse.redirect(new URL('/login?error=InvalidLogin', req.url));
  }

  // Guardar el token en cookie (opcional)
  const res = NextResponse.redirect(new URL('/progress', req.url));
  res.cookies.set('token', data.token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  return res;
}
