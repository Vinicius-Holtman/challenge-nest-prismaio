import { Injectable } from '@nestjs/common';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {

  async create(data: BookDTO) {

  }
}
