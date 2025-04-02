import { Injectable } from '@nestjs/common';
import { CreateWritingDto } from './dto/create-writing.dto';
import { UpdateWritingDto } from './dto/update-writing.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WritingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWritingDto: CreateWritingDto) {
    return await this.prisma.writing.create({
      data: createWritingDto,
    });
  }

  async findAll() {
    return await this.prisma.writing.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.writing.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateWritingDto: UpdateWritingDto) {
    return await this.prisma.writing.update({
      where: { id },
      data: updateWritingDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.writing.delete({
      where: { id },
    });
  }
}

