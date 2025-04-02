import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsInt } from 'class-validator';

export class CreateResultDto {
  @ApiProperty({ description: 'Reading score for the student', example: 85.5 })
  @IsNumber()
  readingScore: number;

  @ApiProperty({ description: 'Listening score for the student', example: 90.0 })
  @IsNumber()
  listeningScore: number;

  @ApiProperty({ description: 'Writing score for the student', example: 88.5 })
  @IsNumber()
  writingScore: number;

  @ApiProperty({ description: 'Speaking score for the student', example: 92.0 })
  @IsNumber()
  speakingScore: number;

  @ApiProperty({ description: 'ID of the associated exam', example: 1 })
  @IsInt()
  examId: number;

  @ApiProperty({ description: 'ID of the student', example: 1 })
  @IsInt()
  studentId: number;

  @ApiProperty({ description: 'Overall score of the student', example: 88.5 })
  @IsNumber() 
  overallScore: number;
}