import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/starts-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 40)
  @StartsWith('Task:')
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt({ message: 'Priority must be an integer number' })
  @IsPositive({ message: 'Priority must be more than 0' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'It must be an array' })
  @IsEnum(TaskTag, { message: 'This tag is not allowed', each: true })
  @IsOptional()
  tags: TaskTag[];

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 symbols' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    message:
      'Password must have at least one capital letter and at least one number',
  })
  password: string;

  @IsUrl({ protocols: ['https'] }, { message: 'It must be valid URL string' })
  websiteUrl: string;

  @IsUUID(4, { message: 'Not correct format of UUID' })
  userId: string;
}
