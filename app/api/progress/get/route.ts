import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/db';
import UserProgress from '@/models/UserProgress';

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return NextResponse.json({ ok: false, error: 'Token requerido' }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as any).id;

    await connectDB();

    const progress = await UserProgress.findOne({ userId });
    if (!progress) {
      return NextResponse.json({ ok: true, progress: [] }); // sin progreso aún
    }

    return NextResponse.json({ ok: true, progress });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
