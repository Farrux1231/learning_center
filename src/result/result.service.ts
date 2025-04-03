import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResultService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const results = await this.prisma.result.findMany({
      include: {
        exam: {
          include: {
            reading: true, 
          },
        },
        student: true,
      },
    });
  
    const answers = await this.prisma.answer.findMany();
  
    return results.map((result) => {
      let correct = 0;
      let incorrect = 0;
  
      answers.forEach((ans) => {
        if (result.studentId === ans.studentId) { 
          const readingQuestion = result.exam.reading.find(
            (q) => q.id === ans.readingQuestionId
          );
  
          if (readingQuestion) {
            if (readingQuestion.answer === ans.readingAnswer) {
              correct++;
            } else {
              incorrect++;
            }
          }
        }
      });
  
      return {
        ...result,
        correct,
        incorrect,
      };
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
