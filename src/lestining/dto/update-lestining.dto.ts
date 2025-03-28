import { PartialType } from '@nestjs/mapped-types';
import { CreateLestiningDto } from './create-lestining.dto';

export class UpdateLestiningDto extends PartialType(CreateLestiningDto) {}
