import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResultService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createResultDto: CreateResultDto) {
    return this.prisma.result.create({
      data: createResultDto,
    });
  }

  async findAll() {
    return this.prisma.result.findMany({
      include: {
        exam: true,
        student: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.result.findUnique({
      where: { id },
      include: {
        exam: true,
        student: true,
      },
    });
  }

  async update(id: number, updateResultDto: UpdateResultDto) {
    return this.prisma.result.update({
      where: { id },
      data: updateResultDto,
    });
  }

  async remove(id: number) {
    return this.prisma.result.delete({
      where: { id },
    });
  }
}
