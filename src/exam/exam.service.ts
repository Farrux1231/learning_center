import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExamService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.exam.findMany({
      select: {
        reading: true,
        lestinig: true,
        writing: true,
        speaking: true,
      },
    });
  }
  

  async findOne(id: number) {
    return this.prisma.exam.findUnique({
      where: { id },
      select: {
        reading: true,
        lestinig: true,
        writing: true,
        speaking: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.exam.delete({
      where: { id },
    });
  }
}
