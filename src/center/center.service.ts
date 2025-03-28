import { Injectable } from '@nestjs/common';
import { CreateCenterDto } from './dto/create-center.dto';
import { UpdateCenterDto } from './dto/update-center.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CenterService {
  constructor(private readonly prisma:PrismaService){}

  async findUser(email:string){
    let user = await this.prisma.center.findFirst({where:{email}})
    return user
  }

  async create(createCenterDto: CreateCenterDto) {
    try {
      let center = await this.findUser(createCenterDto.email)
      if(center){
        throw new Error(`already created with this email`)
      }
      const newcenter = await this.prisma.center.create({
        data: {
          ...createCenterDto,
        },
      });
      return {newcenter};
    } catch (error) {
      throw new Error(`Failed to create center: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const centers = await this.prisma.center.findMany();
      return centers;
    } catch (error) {
      throw new Error(`Failed to fetch centers: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const center = await this.prisma.center.findUnique({
        where: { id },
      });
      if (!center) {
        throw new Error(`Center with ID ${id} not found`);
      }
      return center;
    } catch (error) {
      throw new Error(`Failed to fetch center: ${error.message}`);
    }
  }

  async update(id: number, updateCenterDto: UpdateCenterDto) {
    try {
      const center = await this.prisma.center.update({
        where: { id },
        data: {
          ...updateCenterDto,
        },
      });
      return center;
    } catch (error) {
      throw new Error(`Failed to update center: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.center.delete({
        where: { id },
      });
      return { message: `Center with ID ${id} has been removed` };
    } catch (error) {
      throw new Error(`Failed to remove center: ${error.message}`);
    }
  }

}
