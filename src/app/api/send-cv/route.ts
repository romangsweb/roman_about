import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// We initialize Resend safely. During build time, env vars might be missing.
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

export async function POST(request: Request) {
    try {
        const { name, email } = await request.json();

        if (!name || !email) {
            return NextResponse.json({ error: 'Falta nombre o correo' }, { status: 400 });
        }

        // Send Email to the User that requested the CV
        const data = await resend.emails.send({
            from: 'Román García <hola@tu-dominio.com>', // MUST BE verified domain in Resend
            to: [email],
            subject: 'Román García - Perfil Profesional (PDF)',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>¡Hola ${name}!</h2>
          <p>Gracias por tu interés en mi perfil profesional.</p>
          <p>Como lo solicitaste, puedes descargar o ver la versión completa estructurada de mi experiencia haciendo clic en el siguiente enlace:</p>
          <p style="margin: 30px 0;">
             <a href="https://tu-sitio.com/roman_garcia_cv.pdf" style="background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Ver Perfil Completo
             </a>
          </p>
          <p>Espero que podamos conectar pronto. Si tienes alguna duda sobre crecimiento, demanda B2B o implementaciones tecnológicas, no dudes en responderme este correo directamente.</p>
          <br>
          <p>Saludos,</p>
          <p><strong>Román García</strong><br>
          Creative Technologist & Marketing Architect</p>
        </div>
      `,
        });

        // Optionally, send a silent notification to yourself/Slack by sending a self-email via Resend too.
        await resend.emails.send({
            from: 'Notificaciones Web <hola@tu-dominio.com>',
            to: ['tu-correo-real@ejemplo.com'], // Cambiar por el correo de Román
            subject: '🎉 Nuevo Lead CV Descargado',
            text: `Alguien acaba de descargar tu CV.\n\nNombre: ${name}\nCorreo: ${email}\nFecha: ${new Date().toLocaleString()}`,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error enviando correo con Resend:', error);
        return NextResponse.json({ error: 'Error del servidor al enviar correo' }, { status: 500 });
    }
}
