// app/api/auth/manual-login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ ok: false, error: 'Usuario no encontrado' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ ok: false, error: 'Credenciales inválidas' }, { status: 401 });
    }

    const token = jwt.sign(
      {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    return NextResponse.json({
      ok: true,
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message || 'Error en el login' },
      { status: 500 }
    );
  }
}
