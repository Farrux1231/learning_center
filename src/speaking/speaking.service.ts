import { Injectable } from '@nestjs/common';
import { CreateSpeakingDto } from './dto/create-speaking.dto';
import { UpdateSpeakingDto } from './dto/update-speaking.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeakingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSpeakingDto: CreateSpeakingDto) {
    return await this.prisma.speaking.create({
      data: createSpeakingDto,
    });
  }

  async findAll() {
    return await this.prisma.speaking.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.speaking.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSpeakingDto: UpdateSpeakingDto) {
    return await this.prisma.speaking.update({
      where: { id },
      data: updateSpeakingDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.speaking.delete({
      where: { id },
    });
  }
}

