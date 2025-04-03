import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({ example: 1, description: 'Reading question ID', required: false })
  @IsOptional()
  @IsInt()
  readingQuestionId?: number;

  @ApiProperty({ example: 'My reading answer', description: 'Answer for the reading question', required: false })
  @IsOptional()
  @IsString()
  readingAnswer?: string;

  @ApiProperty({ example: 2, description: 'Listening question ID', required: false })
  @IsOptional()
  @IsInt()
  listeningQuestionId?: number;

  @ApiProperty({ example: 'My listening answer', description: 'Answer for the listening question', required: false })
  @IsOptional()
  @IsString()
  listeningAnswer?: string;

  @ApiProperty({ example: 3, description: 'Writing question ID', required: false })
  @IsOptional()
  @IsInt()
  writingQuestionId?: number;

  @ApiProperty({ example: 'My writing answer', description: 'Answer for the writing question', required: false })
  @IsOptional()
  @IsString()
  writingAnswer?: string;
}
