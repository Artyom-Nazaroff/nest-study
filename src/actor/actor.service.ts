import { Injectable } from '@nestjs/common';
import { Actor } from '@prisma/client';
import { CreateActorDto } from './dto/create-actor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActorService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(dto: CreateActorDto): Promise<Actor> {
    const { name } = dto;
    const actor = await this.prismaService.actor.create({
      data: {
        name,
      },
    });
    return actor;
  }
}
