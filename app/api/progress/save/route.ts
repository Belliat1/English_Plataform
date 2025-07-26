import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import jwt from 'jsonwebtoken';
import Progress from '@/models/Progress';

export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '');
    const { level, moduleId } = await req.json();

    if (!token) {
      return NextResponse.json({ ok: false, error: 'Token requerido' }, { status: 401 });
    }

    if (!level || !moduleId) {
      return NextResponse.json({ ok: false, error: 'Datos incompletos' }, { status: 400 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as any).id;

    await connectDB();

    let progressDoc = await Progress.findOne({ userId });

    if (!progressDoc) {
      // Crear nuevo progreso
      progressDoc = await Progress.create({
        userId,
        progress: [{ level, modules: [moduleId] }],
      });
    } else {
      // Actualizar progreso
      const levelProgress = progressDoc.progress.find((p: any) => p.level === level);

      if (levelProgress) {
        if (!levelProgress.modules.includes(moduleId)) {
          levelProgress.modules.push(moduleId);
        }
      } else {
        progressDoc.progress.push({ level, modules: [moduleId] });
      }

      await progressDoc.save();
    }

    return NextResponse.json({ ok: true, progress: progressDoc.progress });
  } catch (err: any) {
    console.error('[ERROR SAVE PROGRESS]', err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
