import { Book } from 'src/books/interfaces/book.interface';

export class UpdateUserDto {
  readonly username: string;
  readonly password: string;
  readonly currentPassword: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
}
