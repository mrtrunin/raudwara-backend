import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from 'src/users/interfaces/user.interface';
import { JwtService, JwtModule } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  const userMock: User = {
    username: 'mrtrunin',
    password: 'karvane',
    firstName: 'Lars',
    lastName: 'Trunin',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        { provide: getModelToken('User'), useValue: userMock },
        { provide: JwtService, useValue: JwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
