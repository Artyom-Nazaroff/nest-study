import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequest {
  @ApiProperty({
    description: "User's name",
    example: 'Jhon Doe',
    maxLength: 50,
  })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name must not be empty' })
  @MaxLength(50, { message: 'Name must be maximum 50 symbols' })
  name: string;

  @ApiProperty({
    description: "User's email",
    example: 'jhondoe@example.com',
  })
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsEmail({}, { message: 'Not correct email format' })
  email: string;

  @ApiProperty({
    description: "User's password",
    example: '123456',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password must not be empty' })
  @MinLength(6, { message: 'Password must be minimum 6 symbols' })
  @MaxLength(50, { message: 'Password must be maximum 50 symbols' })
  password: string;
}
