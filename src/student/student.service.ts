import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.prisma.student.create({
      data: createStudentDto,
    });
  }

  async findAll() {
    return await this.prisma.student.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.student.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return await this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.student.delete({
      where: { id },
    });
  }
}

