import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieRequest } from './dto/create-movie.dto';
import {
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MovieResponse } from './dto/movie.dto';

@ApiTags('Movie')
@Controller({
  path: 'movies',
})
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Get movies list',
    description: 'This method returns all movies list',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Movies were founded',
    type: [MovieResponse],
  })
  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @ApiOperation({
    summary: 'Get movie by ID',
    description: 'This method returns one movie by ID',
  })
  @ApiOkResponse({ description: 'Movies were founded', type: MovieResponse })
  @ApiNotFoundResponse({
    description: 'Movie hasn not founded',
    example: {
      status: 404,
      message: 'Movie not found',
      timestamp: new Date().toISOString(),
      path: '/movie/123',
    },
  })
  @ApiHeader({
    name: 'X-Auth-Token',
    description: 'Auth token',
  })
  @Get(':id')
  findById(@Param('id') id: string, @Query('year') year: number) {
    return this.movieService.findById(id);
  }

  @ApiOperation({ summary: 'Create movie' })
  @Post()
  create(@Body() dto: CreateMovieRequest) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateMovieRequest) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
