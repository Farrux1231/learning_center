import { Injectable } from '@nestjs/common';
import { CreateSpeakingDto } from './dto/create-speaking.dto';
import { UpdateSpeakingDto } from './dto/update-speaking.dto';

@Injectable()
export class SpeakingService {
  create(createSpeakingDto: CreateSpeakingDto) {
    return 'This action adds a new speaking';
  }

  findAll() {
    return `This action returns all speaking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speaking`;
  }

  update(id: number, updateSpeakingDto: UpdateSpeakingDto) {
    return `This action updates a #${id} speaking`;
  }

  remove(id: number) {
    return `This action removes a #${id} speaking`;
  }
}
