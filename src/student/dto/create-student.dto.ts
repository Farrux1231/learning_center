import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsPhoneNumber } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    description: 'First name of the student',
    example: 'John',
  })
  @IsString()
  firstname: string;

  @ApiProperty({
    description: 'Last name of the student',
    example: 'Doe',
  })
  @IsString()
  lastname: string;

  @ApiProperty({
    description: 'Phone number of the student',
    example: '+1234567890',
  })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    description: 'Password for the student account',
    example: 'password123',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'ID of the group the student belongs to',
    example: 1,
  })
  @IsInt()
  groupId: number;
}
