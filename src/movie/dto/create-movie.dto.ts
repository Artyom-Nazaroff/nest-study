import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class CreateMovieRequest {
  @ApiProperty({
    description: 'Movie name',
    example: 'Fight club',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Release year',
    example: 1999,
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;

  @ApiPropertyOptional({
    description: "Movie's poster link",
    example: 'https://storage.example.com/posters/123123',
    type: String,
  })
  @IsString()
  imageUrl: string;

  @ApiProperty({
    description: 'Actors ID',
    example: ['34534', '6785678'],
    type: [String],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  actorIds: string[];
}
