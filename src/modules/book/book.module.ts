import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { PrismaService } from '../../database/PrismaService';
import { BookController } from './book.controller';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService]
})
export class BookModule {}
