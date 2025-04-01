import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, phone, businessArea, message, type } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'phanhuypy.1999@gmail.com',
                pass: 'oqzzdnuuyxujknek',
            },
        });


        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; background-color: #f9f9f9;">
                <h1 style="color: #333; border-bottom: 2px solid #33ccff; padding-bottom: 10px; font-size: 24px;">New Contact Form Submission</h1>
                <p style="font-size: 16px; line-height: 1.5;"><strong>Name:</strong> ${name}</p>
                <p style="font-size: 16px; line-height: 1.5;"><strong>Email:</strong> ${email}</p>
                <p style="font-size: 16px; line-height: 1.5;"><strong>Phone:</strong> ${phone}</p>
                <p style="font-size: 16px; line-height: 1.5;"><strong>Business Area:</strong> ${businessArea}</p>
                <p style="font-size: 16px; line-height: 1.5;"><strong>Message:</strong></p>
                <p style="font-size: 16px; line-height: 1.5; background-color: #f1f1f1; padding: 10px; border-left: 4px solid #33ccff;">${message}</p>
                <p style="font-size: 16px; line-height: 1.5;"><strong>Type:</strong> ${type || 'Not specified'}</p>
                <footer style="margin-top: 20px; font-size: 14px; color: #777;">
                    <p>This email was sent from your contact form.</p>
                </footer>
            </div>
        `;

        // Send the email
        const mailOptions = {
            from: `"Contact Form" <phanhuypy.1999@gmail.com>`,
            to: 'phanhuypy.1999@gmail.com',
            replyTo: email,
            subject: `New Contact Form Submission`,
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