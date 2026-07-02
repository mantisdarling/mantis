import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExpertsModule } from './experts/experts.module';
import { SessionModule } from './session/session.module';
import { PaymentsModule } from './payments/payments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    AuthModule, 
    ExpertsModule, 
    SessionModule, 
    PaymentsModule,
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: 6379,
      },
    }),
    NotificationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
