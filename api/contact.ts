import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_name, user_email, subject, message } = req.body || {};

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || 'aswinedu1@gmail.com';
    const data = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: user_email,
      subject: subject ? `[Portfolio] ${subject} - from ${user_name}` : `New message from ${user_name} via Portfolio`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; rounded: 8px;">
          <h2 style="color: #915EFF; margin-top: 0;">New Portfolio Contact Message</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${user_name}</p>
          <p><strong>Email:</strong> <a href="mailto:${user_email}" style="color: #915EFF;">${user_email}</a></p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #915EFF; border-radius: 4px; white-space: pre-wrap; font-size: 14px; color: #333;">${message}</div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">Sent from https://aswinsai.tech portfolio contact form.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Failed to send email';
    return res.status(500).json({ error: errMsg });
  }
}
