import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCenterDto {
  @ApiProperty({
    description: 'Name of the center',
    example: 'Central Learning Hub',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email address of the center',
    example: 'center@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password for the center account',
    example: 'strongpassword123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Document identifier (optional)',
    example: '1234-5678-9101',
    required: false,
  })
  @IsOptional()
  @IsString()
  document?: string;

  @ApiProperty({
    description: 'Region where the center is located',
    example: 'North Zone',
  })
  @IsNotEmpty()
  @IsString()
  region: string;

  @ApiProperty({
    description: 'Exact location of the center',
    example: '123 Main Street, Springfield',
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    description: 'URL of the center image (optional)',
    example: 'https://example.com/image.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;
}
