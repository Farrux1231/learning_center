import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({
    description: 'Name of the group',
    example: 'Advanced English Class',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Start time of the group',
    example: '2025-04-01T09:00:00Z',
  })
  @IsNotEmpty()
  @IsDate()
  startTime: Date;

  @ApiProperty({
    description: 'End time of the group (optional)',
    example: '2025-06-01T12:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDate()
  endTime?: Date;

  @ApiProperty({
    description: 'ID of the primary teacher for the group',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  teacherId: number;

  @ApiProperty({
    description: 'ID of the assistant teacher for the group',
    example: 2,
  })
  @IsNotEmpty()
  @IsInt()
  assistTeacherId: number;
}
