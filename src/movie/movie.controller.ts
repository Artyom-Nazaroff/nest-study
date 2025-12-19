import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Headers,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';

@Controller({
  path: 'movies',
})
export class MovieController {
  @Get()
  findAll(@Query() query: any) {
    return `Фильмы с параметрами ${JSON.stringify(query)}`;
  }

  @Post()
  create(@Body() body: any) {
    return `Вот такой вот body ${JSON.stringify(body)}}`;
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers;
  }

  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return { method: req.method };
  }
}
