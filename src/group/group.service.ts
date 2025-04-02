import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({
      data: createGroupDto,
    });
  }

  async findAll() {
    return this.prisma.group.findMany({
      include: {
        teacher: true,
        assistTeacher: true,
        students: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.group.findUnique({
      where: { id },
      include: {
        teacher: true,
        assistTeacher: true,
        students: true,
      },
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prisma.group.update({
      where: { id },
      data: updateGroupDto,
    });
  }

  async remove(id: number) {
    return this.prisma.group.delete({
      where: { id },
    });
  }
}
