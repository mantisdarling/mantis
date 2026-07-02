import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExpertsModule } from './experts/experts.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ExpertsModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
