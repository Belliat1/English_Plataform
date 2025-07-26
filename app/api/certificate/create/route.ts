// api/certificate/create.ts
import { getToken } from "next-auth/jwt";
import { connectDB } from "@/lib/db";
import Certificate from "@/models/Certificate";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token || !token.user) {
      return NextResponse.json({ ok: false, error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const { examName } = body;

    if (!examName) {
      return NextResponse.json({ ok: false, error: "Nombre del examen requerido" }, { status: 400 });
    }

    await connectDB();

    await Certificate.create({
      userId: (token?.user as { id: string }).id,
      examName
    });

    return NextResponse.json({ ok: true, message: "Certificado generado correctamente" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Error en el servidor" }, { status: 500 });
  }
}
