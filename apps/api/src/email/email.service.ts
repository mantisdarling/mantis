import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || 'ethereal.user@ethereal.email',
        pass: process.env.SMTP_PASS || 'ethereal.password',
      },
    });
  }

  async sendBookingConfirmation(expertEmail: string, learnerEmail: string, timeString: string) {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-w: 600px; margin: auto; padding: 20px; border: 1px solid #333; background: #000; color: #fff;">
        <h2 style="color: #6366f1;">MANTIS Session Confirmed</h2>
        <p>Your 1-on-1 expert session is officially booked.</p>
        <div style="background: #111; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <strong>Time:</strong> ${timeString}
        </div>
        <p>Log into your MANTIS dashboard 5 minutes before the start time to join the WebRTC call.</p>
        <hr style="border-color: #333;" />
        <p style="font-size: 12px; color: #888;">Stop guessing, start talking.</p>
      </div>
    `;

    try {
      await this.transporter.sendMail({
        from: '"MANTIS Marketplace" <noreply@mantis.com>',
        to: `${expertEmail}, ${learnerEmail}`,
        subject: 'MANTIS - Session Confirmed',
        html: htmlContent,
      });
      this.logger.log(`Booking confirmation email sent to ${expertEmail} and ${learnerEmail}`);
    } catch (error) {
      this.logger.error('Failed to send booking confirmation email', error);
    }
  }
}
