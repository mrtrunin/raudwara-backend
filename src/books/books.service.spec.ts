import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book } from './interfaces/book.interface';

describe('BooksService', () => {
  let service: BooksService;

  const bookMock: Book = {
    id: '21byeuhi21heu21i',
    title: 'Matemaatika',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        { provide: getModelToken('Book'), useValue: bookMock },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
