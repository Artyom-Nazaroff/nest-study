import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async sendMessage(dto: SendMessageDto) {
    const { message } = dto;

    return this.prismaService.message.create({
      data: {
        message,
      },
    });
  }
}
