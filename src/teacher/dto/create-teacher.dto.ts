import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsPhoneNumber, IsOptional, IsInt } from 'class-validator';

export class CreateTeacherDto {
  @ApiProperty({
    description: 'First name of the teacher',
    example: 'Jane',
  })
  @IsString()
  firstname: string;

  @ApiProperty({
    description: 'Last name of the teacher',
    example: 'Smith',
  })
  @IsString()
  lastname: string;

  @ApiProperty({
    description: 'Phone number of the teacher',
    example: '+9876543210',
  })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    description: 'Password for the teacher account',
    example: 'securepassword123',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Diploma of the teacher (optional)',
    example: 'Master of Education',
    required: false,
  })
  @IsOptional()
  @IsString()
  diplom?: string;

  @ApiProperty({
    description: 'Image URL of the teacher (optional)',
    example: 'http://example.com/teacher.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    description: 'ID of the associated center',
    example: 1,
  })
  @IsInt()
  centerId: number;
}
