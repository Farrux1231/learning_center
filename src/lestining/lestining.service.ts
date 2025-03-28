import { Injectable } from '@nestjs/common';
import { CreateLestiningDto } from './dto/create-lestining.dto';
import { UpdateLestiningDto } from './dto/update-lestining.dto';

@Injectable()
export class LestiningService {
  create(createLestiningDto: CreateLestiningDto) {
    return 'This action adds a new lestining';
  }

  findAll() {
    return `This action returns all lestining`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lestining`;
  }

  update(id: number, updateLestiningDto: UpdateLestiningDto) {
    return `This action updates a #${id} lestining`;
  }

  remove(id: number) {
    return `This action removes a #${id} lestining`;
  }
}
