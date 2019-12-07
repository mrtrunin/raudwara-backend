import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find();
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findOne({ _id: id }).populate({
      path: 'chapters',
      model: 'Chapter',
      populate: {
        path: 'sections',
        model: 'Section',
      },
    });
  }

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async update(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
  }

  async delete(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndRemove({ _id: id });
  }
}
