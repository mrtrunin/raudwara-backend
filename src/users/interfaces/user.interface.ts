import { Book } from 'src/books/interfaces/book.interface';

export interface User {
  id?: string;
  username: string;
  password: string;
  currentPassword?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  books?: Book[];
}
