import { Injectable, Logger } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadsService {
  private readonly s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'mock_access_key',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'mock_secret_key',
    },
  });
  private readonly bucketName = process.env.AWS_S3_BUCKET || 'mantis-avatars';
  private readonly logger = new Logger(UploadsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async uploadAvatar(userId: string, file: Express.Multer.File): Promise<string> {
    const fileExtension = file.originalname.split('.').pop();
    const key = `avatars/${userId}/${uuidv4()}.${fileExtension}`;

    try {
      // In production, we'd actually upload this:
      // await this.s3Client.send(
      //   new PutObjectCommand({
      //     Bucket: this.bucketName,
      //     Key: key,
      //     Body: file.buffer,
      //     ContentType: file.mimetype,
      //     ACL: 'public-read',
      //   }),
      // );
      
      this.logger.log(`Mock uploaded file to S3: s3://${this.bucketName}/${key}`);

      // Construct public URL
      const publicUrl = `https://${this.bucketName}.s3.amazonaws.com/${key}`;

      // Update User's profile
      await this.prisma.profile.update({
        where: { userId },
        data: { avatarUrl: publicUrl },
      });

      return publicUrl;
    } catch (error) {
      this.logger.error('Error uploading avatar to S3', error);
      throw new Error('Failed to upload avatar');
    }
  }
}
