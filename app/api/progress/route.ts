// app/api/progress/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/db';
import Progress from '@/models/Progress';

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ ok: false, error: 'Token requerido' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as any).id;

    await connectDB();

    const progressDoc = await Progress.findOne({ userId });

    return NextResponse.json({
      ok: true,
      progress: progressDoc?.progress || [],
    });
  } catch (err: any) {
    console.error('[ERROR PROGRESS]', err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
