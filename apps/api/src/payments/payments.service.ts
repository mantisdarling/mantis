import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(private prisma: PrismaService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
      apiVersion: '2023-10-16' as any,
    });
  }

  async createConnectAccount(userId: string) {
    // 1. Create a Stripe Express account
    const account = await this.stripe.accounts.create({
      type: 'express',
      country: 'US', // default mock
      capabilities: {
        transfers: { requested: true },
      },
    });

    // 2. Save the account ID to the user's profile
    await this.prisma.profile.update({
      where: { userId },
      data: { stripeAccountId: account.id },
    });

    // 3. Create an account link for onboarding
    const accountLink = await this.stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/financials/reauth`,
      return_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/financials/return`,
      type: 'account_onboarding',
    });

    return { url: accountLink.url };
  }
}
