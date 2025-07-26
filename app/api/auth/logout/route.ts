import { NextResponse } from 'next/server';

export async function POST() {
  // Elimina la cookie "token" expirándola de inmediato
  const response = NextResponse.json({ ok: true, message: "Sesión cerrada" });
  response.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0), // Fuerza expiración inmediata
  });

  return response;
}
