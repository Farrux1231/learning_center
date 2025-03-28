import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LestiningService } from './lestining.service';
import { CreateLestiningDto } from './dto/create-lestining.dto';
import { UpdateLestiningDto } from './dto/update-lestining.dto';

@Controller('lestining')
export class LestiningController {
  constructor(private readonly lestiningService: LestiningService) {}

  @Post()
  create(@Body() createLestiningDto: CreateLestiningDto) {
    return this.lestiningService.create(createLestiningDto);
  }

  @Get()
  findAll() {
    return this.lestiningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lestiningService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLestiningDto: UpdateLestiningDto) {
    return this.lestiningService.update(+id, updateLestiningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lestiningService.remove(+id);
  }
}
