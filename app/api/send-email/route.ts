import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, phone, businessArea, message, type } = await req.json();

    try {
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587, // Port cho TLS
            secure: false, // False cho port 587 (dùng TLS), true cho port 465 (dùng SSL)
            auth: {
                user: 'phanhuypy.1999@gmail.com',
                pass: 'phanhuypy1999', // App Password
            },
        });

        // HTML content for the email
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                <h1 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Business Area:</strong> ${businessArea}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Type:</strong> ${type || 'Not specified'}</p>
            </div>
        `;

        // Send the email
        const mailOptions = {
            from: `"Contact Form" <${process.env.SMTP_USER || 'your-email@gmail.com'}>`,
            to: process.env.RECIPIENT_EMAIL || 'phanhuypy.1999@gmail.com',
            replyTo: email,
            subject: `New Contact Form Submission ${type ? `(${type === 'creator' ? 'Creator' : 'Brand'})` : ''}`,
            html: htmlContent,
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: 'Email sent successfully',
            data: { messageId: info.messageId }
        }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            message: 'Failed to send email',
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}