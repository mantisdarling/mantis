import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async createReview(dto: { sessionId: string; learnerId: string; rating: number; comment?: string }) {
    // 1. Verify session exists and is completed
    const session = await this.prisma.session.findUnique({
      where: { id: dto.sessionId },
      include: { review: true }
    });

    if (!session) throw new BadRequestException('Session not found');
    if (session.learnerId !== dto.learnerId) throw new BadRequestException('Unauthorized');
    if (session.status !== 'COMPLETED') throw new BadRequestException('Session must be completed to leave a review');
    if (session.review) throw new BadRequestException('Review already exists for this session');

    // 2. Create the review
    const review = await this.prisma.review.create({
      data: {
        sessionId: dto.sessionId,
        learnerId: dto.learnerId,
        expertId: session.expertId,
        rating: dto.rating,
        comment: dto.comment,
      }
    });

    // 3. Recalculate Expert's average rating
    const allReviews = await this.prisma.review.aggregate({
      where: { expertId: session.expertId },
      _avg: { rating: true }
    });

    const newAvg = allReviews._avg.rating || dto.rating;

    await this.prisma.profile.update({
      where: { userId: session.expertId },
      data: { rating: newAvg }
    });

    return review;
  }
}
