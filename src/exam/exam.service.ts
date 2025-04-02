import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExamService {
  constructor(private prisma: PrismaService) {}

  async create(createExamDto: CreateExamDto) {
    return this.prisma.exam.create({
      data: createExamDto,
    });
  }

  async findAll() {
    return this.prisma.exam.findMany({
      include: {
        reading: true,
        lestinig: true,
        writing: true,
        speaking: true,
        result: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.exam.findUnique({
      where: { id },
      include: {
        reading: true,
        lestinig: true,
        writing: true,
        speaking: true,
        result: true,
      },
    });
  }

  async update(id: number, updateExamDto: UpdateExamDto) {
    return this.prisma.exam.update({
      where: { id },
      data: updateExamDto,
    });
  }

  async remove(id: number) {
    return this.prisma.exam.delete({
      where: { id },
    });
  }
}
