import { PrismaClient, Role } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/mantis?schema=public'
    }
  }
});

async function main() {
  console.log('Seeding database...');
  
  await prisma.user.upsert({
    where: { email: 'sarah@example.com' },
    update: {},
    create: {
      email: 'sarah@example.com',
      name: 'Dr. Sarah Chen',
      passwordHash: 'hashed-pass-123',
      role: Role.EXPERT,
      timezone: 'America/Los_Angeles',
      profile: {
        create: {
          bio: 'Staff ML Engineer with 10 years of experience.',
          skills: ['Python', 'PyTorch', 'System Design'],
          hourlyRate: 150,
          isVerified: true,
          rating: 4.9
        }
      }
    }
  });

  await prisma.user.upsert({
    where: { email: 'marcus@example.com' },
    update: {},
    create: {
      email: 'marcus@example.com',
      name: 'Marcus Johnson',
      passwordHash: 'hashed-pass-123',
      role: Role.EXPERT,
      timezone: 'Europe/London',
      profile: {
        create: {
          bio: 'Senior Product Designer focusing on UX/UI.',
          skills: ['Figma', 'UX Research', 'UI'],
          hourlyRate: 90,
          isVerified: true,
          rating: 4.8
        }
      }
    }
  });

  await prisma.user.upsert({
    where: { email: 'elena@example.com' },
    update: {},
    create: {
      email: 'elena@example.com',
      name: 'Elena Rodriguez',
      passwordHash: 'hashed-pass-123',
      role: Role.EXPERT,
      timezone: 'America/New_York',
      profile: {
        create: {
          bio: 'Founding Engineer at multiple startups.',
          skills: ['React', 'Next.js', 'Node'],
          hourlyRate: 120,
          isVerified: true,
          rating: 5.0
        }
      }
    }
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
