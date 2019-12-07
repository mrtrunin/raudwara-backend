import { Book } from 'src/books/interfaces/book.interface';

export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly books?: Book[];
}
