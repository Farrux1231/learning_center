import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class AnswerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAnswerDto: CreateAnswerDto) {
    return this.prisma.answer.create({
      data: createAnswerDto,
    });
  }

  async findAll() {
    return this.prisma.answer.findMany();
  }

  async findOne(id: number) {
    const answer = await this.prisma.answer.findUnique({
      where: { id },
    });

    if (!answer) {
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }

    return answer;
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    await this.findOne(id);  

    return this.prisma.answer.update({
      where: { id },
      data: updateAnswerDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); 

    return this.prisma.answer.delete({
      where: { id },
    });
  }
}
