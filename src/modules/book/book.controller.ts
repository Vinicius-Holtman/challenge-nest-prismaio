import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data)
  }

  @Get()
  async findAll() {
    return this.bookService.findAll()
  }
}
