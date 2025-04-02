import { Injectable } from '@nestjs/common';
import { CreateLestiningDto } from './dto/create-lestining.dto';
import { UpdateLestiningDto } from './dto/update-lestining.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListeningService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createListeningDto: CreateLestiningDto) {
    return this.prisma.lestinig.create({
      data: createListeningDto,
    });
  }

  async findAll() {
    return this.prisma.lestinig.findMany();
  }

  async findOne(id: number) {
    return this.prisma.lestinig.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateListeningDto: UpdateLestiningDto) {
    return this.prisma.lestinig.update({
      where: { id },
      data: updateListeningDto,
    });
  }

  async remove(id: number) {
    return this.prisma.lestinig.delete({
      where: { id },
    });
  }
}
