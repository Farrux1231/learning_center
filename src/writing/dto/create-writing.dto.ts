import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateWritingDto {
  @ApiProperty({
    description: 'Question for the writing section',
    example: 'Write an essay on the importance of education.',
  })
  @IsString()
  question: string;

  @ApiProperty({
    description: 'Options for the question (if any)',
    example: ['Option A', 'Option B', 'Option C'],
  })
  @IsArray()
  @IsString({ each: true })
  options: string[];

  @ApiProperty({
    description: 'Correct answer or model answer for the question',
    example: 'Education is important because it shapes the future of individuals and societies.',
  })
  @IsString()
  answer: string;

  @ApiProperty({
    description: 'Additional description or explanation (optional)',
    example: 'The student should write a 300-word essay on the topic.',
  })
  @IsOptional()
  @IsString()
  desc?: string;

  @ApiProperty({
    description: 'ID of the associated exam',
    example: 1,
  })
  examId: number;
}
