// app/api/seed/user/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST() {
  try {
    await connectDB();

    const email = 'admin@demo.com';
    const existing = await User.findOne({ email });

    if (existing) {
      return NextResponse.json({ ok: false, message: 'Ya existe el usuario' }, { status: 400 });
    }

    const hashed = await bcrypt.hash('123456', 10);

    await User.create({
      name: 'Demo User',
      email,
      password: hashed,
      role: 'admin',
    });

    return NextResponse.json({ ok: true, message: 'Usuario creado con éxito' });

  } catch (err: any) {
    console.error('Error real:', err);
    return NextResponse.json({
      ok: false,
      error: err.message || 'Error al insertar usuario',
    }, { status: 500 });
  }
}
