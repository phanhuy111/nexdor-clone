import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_KSuLNYhN_LBHVyRRJLeaoaGdvq31X6ykd");

export async function POST(req: Request) {
    const { name, email, phone, businessArea, message, type } = await req.json();
    try {
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                <h1 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Business Area:</strong> ${businessArea}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Type:</strong> ${type}</p>
            </div>
        `;

        // Send the email using Resend
        const data = await resend.emails.send({
            from: email, // Use your verified domain or Resend's default sender
            to: 'phanhuypy.1999@gmail.com',
            subject: `New Contact Form Submission (${type === 'creator' ? 'Creator' : 'Brand'})`,
            html: htmlContent,
        });

        return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            message: 'Failed to send email',
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}