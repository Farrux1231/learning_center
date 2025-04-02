import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsInt, IsOptional } from 'class-validator';

export class CreateReadingDto {
  @ApiProperty({ description: 'Question for the reading section', example: 'What is the main idea of the passage?' })
  @IsString()
  question: string;

  @ApiProperty({ description: 'Options for the question', example: ['A', 'B', 'C', 'D'] })
  @IsArray()
  @IsString({ each: true })
  options: string[];

  @ApiProperty({ description: 'Correct answer for the question', example: 'A' })
  @IsString()
  answer: string;

  @ApiProperty({ description: 'Additional description or explanation', example: 'The passage discusses the effects of climate change.' })
  @IsOptional()
  @IsString()
  desc?: string;

  @ApiProperty({ description: 'ID of the associated exam', example: 1 })
  @IsInt()
  examId: number;
}