import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    await connectDB();

    const email = 'demo@inglesya.com';
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ ok: false, message: 'Ya existe el usuario' }, { status: 400 });
    }

    const hashed = await bcrypt.hash('demo1234', 10);

    await User.create({
      name: 'Demo User',
      email,
      password: hashed,
      role: 'student',
    });

    return NextResponse.json({ ok: true, message: 'Usuario demo creado' });
  } catch (err: any) {
    return NextResponse.json({
      ok: false,
      error: err.message || 'Error al insertar usuario',
    }, { status: 500 });
  }
}
