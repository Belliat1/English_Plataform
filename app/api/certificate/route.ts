// app/api/certificate/route.ts
import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

// Configuración específica para Next.js Edge Runtime
const PDFDocument = require('pdfkit/js/pdfkit.standalone');

export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '');
    const { level } = await req.json();

    if (!token) {
      return new Response(JSON.stringify({ ok: false, error: 'Token requerido' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!level) {
      return new Response(JSON.stringify({ ok: false, error: 'Nivel requerido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as any).id;

    await connectDB();
    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ ok: false, error: 'Usuario no encontrado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ✅ Crear PDF elegante
    const doc = new PDFDocument({
      size: 'A4',
      margin: 60,
      bufferPages: true,
      layout: 'landscape' // Formato horizontal para certificados
    });

    const buffers: Uint8Array[] = [];
    doc.on('data', (chunk: Uint8Array) => {
      buffers.push(chunk);
    });

    // Dimensiones de la página en landscape
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;
    const centerX = pageWidth / 2;
    const contentWidth = pageWidth - 120;

    // 🎨 DISEÑO ELEGANTE DEL CERTIFICADO

    // 1. Marco decorativo exterior
    doc.strokeColor('#2563eb') // Azul elegante
       .lineWidth(4)
       .rect(30, 30, pageWidth - 60, pageHeight - 60)
       .stroke();

    // 2. Marco decorativo interior
    doc.strokeColor('#93c5fd') // Azul claro
       .lineWidth(1)
       .rect(50, 50, pageWidth - 100, pageHeight - 100)
       .stroke();

    // 3. Título principal con estilo
    doc.fontSize(36)
       .fillColor('#1e40af') // Azul oscuro
       .text('CERTIFICADO', 0, 100, { 
         align: 'center',
         width: pageWidth
       });

    doc.fontSize(24)
       .fillColor('#374151') // Gris oscuro
       .text('DE FINALIZACIÓN', 0, 140, { 
         align: 'center',
         width: pageWidth
       });

    // 4. Línea decorativa central
    const lineY = 180;
    doc.strokeColor('#fbbf24') // Dorado
       .lineWidth(2)
       .moveTo(centerX - 150, lineY)
       .lineTo(centerX + 150, lineY)
       .stroke();

    // 5. Texto "Se otorga a"
    doc.fontSize(18)
       .fillColor('#6b7280') // Gris medio
       .text('Se otorga a:', 0, 220, { 
         align: 'center',
         width: pageWidth
       });

    // 6. Nombre del usuario (destacado)
    doc.fontSize(28)
       .fillColor('#1e40af') // Azul oscuro
       .text(user.name.toUpperCase(), 0, 260, { 
         align: 'center',
         width: pageWidth
       });

    // 7. Línea bajo el nombre
    doc.strokeColor('#d1d5db') // Gris claro
       .lineWidth(1)
       .moveTo(centerX - 200, 300)
       .lineTo(centerX + 200, 300)
       .stroke();

    // 8. Texto del logro
    doc.fontSize(16)
       .fillColor('#374151') // Gris oscuro
       .text('Por haber completado satisfactoriamente el', 0, 330, { 
         align: 'center',
         width: pageWidth
       });

    doc.fontSize(20)
       .fillColor('#dc2626') // Rojo elegante
       .text(`NIVEL ${level.toUpperCase()}`, 0, 360, { 
         align: 'center',
         width: pageWidth
       });

    doc.fontSize(16)
       .fillColor('#374151')
       .text('del curso de inglés en InglesYA', 0, 390, { 
         align: 'center',
         width: pageWidth
       });

    // 9. Fecha con formato elegante
    const fechaFormateada = new Date().toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    doc.fontSize(14)
       .fillColor('#6b7280')
       .text(`Otorgado el ${fechaFormateada}`, 0, 450, { 
         align: 'center',
         width: pageWidth
       });

    // 10. Elementos decorativos finales
    // Estrellas decorativas
    const drawStar = (x: number, y: number, size: number) => {
      doc.fillColor('#fbbf24') // Dorado
         .polygon([x, y - size], [x + size * 0.3, y - size * 0.3], 
                 [x + size, y], [x + size * 0.3, y + size * 0.3],
                 [x, y + size], [x - size * 0.3, y + size * 0.3],
                 [x - size, y], [x - size * 0.3, y - size * 0.3])
         .fill();
    };

    // Estrellas en las esquinas
    drawStar(120, 120, 8);
    drawStar(pageWidth - 120, 120, 8);
    drawStar(120, pageHeight - 120, 8);
    drawStar(pageWidth - 120, pageHeight - 120, 8);

    // 11. Sello/Logo simulado (círculo decorativo)
    doc.strokeColor('#2563eb')
       .lineWidth(3)
       .circle(centerX, 500, 40)
       .stroke();

    doc.fontSize(12)
       .fillColor('#2563eb')
       .text('InglesYA', 0, 490, { 
         align: 'center',
         width: pageWidth
       });
    
    doc.fontSize(10)
       .text('Academia de Inglés', 0, 505, { 
         align: 'center',
         width: pageWidth
       });

    doc.end();

    // Esperar a que termine la generación
    const pdfBuffer = await new Promise<Buffer>((resolve) => {
      doc.on('end', () => {
        resolve(Buffer.concat(buffers));
      });
    });

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename=certificado-${level}-${user.name.replace(/\s+/g, '-')}.pdf`,
      },
    });
  } catch (err: any) {
    console.error('Error certificado:', err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}