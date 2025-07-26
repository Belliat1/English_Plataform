import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import UserProgress from '@/models/UserProgress';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return NextResponse.json({ ok: false, error: 'Token requerido' }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as any).id;

    await connectDB();

    const progress = await UserProgress.findOne({ userId });

    return NextResponse.json({ ok: true, progress });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
