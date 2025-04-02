import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateSpeakingDto {
  @ApiProperty({
    description: 'Question for the speaking section',
    example: 'Describe your favorite vacation destination.',
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
    description: 'Correct answer for the speaking question',
    example: 'I love visiting the beach because of its relaxing atmosphere.',
  })
  @IsString()
  answer: string;

  @ApiProperty({
    description: 'Additional description or explanation (optional)',
    example: 'The question requires the student to describe their favorite place.',
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
