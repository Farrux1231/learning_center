import { Injectable } from '@nestjs/common';
import { CreateReadingDto } from './dto/create-reading.dto';
import { UpdateReadingDto } from './dto/update-reading.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReadingDto: CreateReadingDto) {
    return this.prisma.reading.create({
      data: createReadingDto,
    });
  }

  async findAll() {
    return this.prisma.reading.findMany();
  }

  async findOne(id: number) {
    return this.prisma.reading.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateReadingDto: UpdateReadingDto) {
    return this.prisma.reading.update({
      where: { id },
      data: updateReadingDto,
    });
  }

  async remove(id: number) {
    return this.prisma.reading.delete({
      where: { id },
    });
  }
}
