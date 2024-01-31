import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [PrismaService],
})
export class UsersModule {}
