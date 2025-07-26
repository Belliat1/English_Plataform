import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export async function GET(req: NextRequest) {
  try {
    // ✅ Primero revisamos el token desde cookie HttpOnly
    const cookieToken = req.cookies.get('token')?.value;

    // ✅ Luego revisamos el token en el header Authorization
    const headerToken = req.headers.get('authorization')?.replace('Bearer ', '');

    const token = cookieToken || headerToken;

    if (!token) {
      return NextResponse.json({}, { status: 200 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as any).id;

    await connectDB();
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({}, { status: 200 });
    }

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      expires: new Date(Date.now() + 86400000).toISOString(), // 1 día
    });
  } catch (err) {
    return NextResponse.json({}, { status: 200 });
  }
}
