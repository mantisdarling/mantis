import { Controller, Post, Body, Headers, UseGuards, Request } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly paymentsService: PaymentsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('connect-onboarding')
  async connectOnboarding(@Request() req) {
    return this.paymentsService.createConnectAccount(req.user.userId);
  }

  @Post('webhook')
  async handleWebhook(@Body() body: any, @Headers('stripe-signature') signature: string) {
    const event = body;

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        
        // Dispatch booking confirmation email
        // In a real scenario, expert/learner emails and times are extracted from paymentIntent.metadata
        await this.emailService.sendBookingConfirmation(
          'expert@mantis.com',
          'learner@mantis.com',
          '10:00 AM UTC'
        );
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return { received: true };
  }
}
