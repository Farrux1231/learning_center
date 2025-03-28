import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeakingService } from './speaking.service';
import { CreateSpeakingDto } from './dto/create-speaking.dto';
import { UpdateSpeakingDto } from './dto/update-speaking.dto';

@Controller('speaking')
export class SpeakingController {
  constructor(private readonly speakingService: SpeakingService) {}

  @Post()
  create(@Body() createSpeakingDto: CreateSpeakingDto) {
    return this.speakingService.create(createSpeakingDto);
  }

  @Get()
  findAll() {
    return this.speakingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeakingDto: UpdateSpeakingDto) {
    return this.speakingService.update(+id, updateSpeakingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakingService.remove(+id);
  }
}
