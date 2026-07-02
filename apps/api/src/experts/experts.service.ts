import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExpertsService {
  constructor(private prisma: PrismaService) {}

  async findAll(skill?: string, minRating?: number) {
    const whereClause: any = {
      role: 'EXPERT',
      profile: {
        isVerified: true,
      },
    };

    if (skill) {
      whereClause.profile.skills = {
        has: skill,
      };
    }

    if (minRating) {
      whereClause.profile.rating = {
        gte: Number(minRating),
      };
    }

    return this.prisma.user.findMany({
      where: whereClause,
      include: {
        profile: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
        role: 'EXPERT'
      },
      include: {
        profile: true,
        slots: {
          where: { isReserved: false }
        }
      }
    });
  }
}
