import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';

@Module({
  controllers: [],
  providers: [ChatService],
})
export class ChatModule {}
