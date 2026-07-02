import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createReview(
    @Request() req,
    @Body() body: { sessionId: string; rating: number; comment?: string }
  ) {
    return this.reviewsService.createReview({
      learnerId: req.user.userId,
      sessionId: body.sessionId,
      rating: body.rating,
      comment: body.comment,
    });
  }
}
