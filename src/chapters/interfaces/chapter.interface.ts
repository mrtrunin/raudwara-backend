import { Section } from 'src/sections/interfaces/section.interface';
import { Book } from 'src/books/interfaces/book.interface';

export interface Chapter {
  id?: string;
  title: string;
  sections?: Section[];
}
