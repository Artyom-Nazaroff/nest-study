import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MovieResponse {
  @ApiProperty({
    description: 'Movie ID',
    example: '345634534',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Movie name',
    example: 'Fight club',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
