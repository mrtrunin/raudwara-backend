import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Body() updateBookDto: CreateBookDto, @Param('id') id): Promise<Book> {
    return this.booksService.update(id, updateBookDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id): Promise<Book> {
    return this.booksService.delete(id);
  }
}
