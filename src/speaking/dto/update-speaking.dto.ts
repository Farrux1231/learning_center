import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingDto } from './create-speaking.dto';

export class UpdateSpeakingDto extends PartialType(CreateSpeakingDto) {}
