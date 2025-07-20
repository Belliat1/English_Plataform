// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET, // asegúrate de tener esta variable
  });

  const isLoginPage = req.nextUrl.pathname === "/login";

  // 🔒 Si NO tiene sesión y quiere acceder a zona privada, redirige a /login
  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ Si ya está autenticado y entra a /login, lo mando a /progress
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/progress", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/progress/:path*",
    "/exams/:path*",
    "/certificates/:path*",
    "/dashboard/:path*",
  ],
};
