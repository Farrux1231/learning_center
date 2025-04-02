import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsInt } from 'class-validator';

export class CreateLestiningDto {
  @ApiProperty({ description: 'Question for the listening section', example: 'What is the speaker talking about?' })
  @IsString()
  question: string;

  @ApiProperty({ description: 'Options for the question', example: ['Music', 'Sports', 'Science', 'History'] })
  @IsArray()
  @IsString({ each: true })
  options: string[];

  @ApiProperty({ description: 'Correct answer for the question', example: 'Music' })
  @IsString()
  answer: string;

  @ApiProperty({ description: 'Additional description or explanation', example: 'The speaker mentions different genres of music.' })
  @IsString()
  desc?: string;

  @ApiProperty({ description: 'ID of the associated exam', example: 1 })
  @IsInt()
  examId: number;
}