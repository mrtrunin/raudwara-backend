import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { getModelToken } from '@nestjs/mongoose';

describe('UsersService', () => {
  let service: UsersService;

  const userMock: User = {
    username: 'mrtrunin',
    password: 'karvane',
    firstName: 'Lars',
    lastName: 'Trunin',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getModelToken('User'), useValue: userMock },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
