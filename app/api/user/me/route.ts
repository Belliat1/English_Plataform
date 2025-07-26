// app/api/user/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ ok: false, error: 'Token no enviado' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      name: string;
      email: string;
      role: string;
    };

    return NextResponse.json({
      ok: true,
      user: {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role,
      }
    });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: 'Token inválido' }, { status: 401 });
  }
}
