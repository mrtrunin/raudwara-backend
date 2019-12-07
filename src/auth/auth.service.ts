import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    let isPasswordValid: boolean;

    try {
      isPasswordValid = await bcrypt.compare(pass, user.password);
    } catch (error) {
      throw new UnauthorizedException(
        `An error occured during password comparison: ${error.toString()}`,
      );
    }

    if (user && isPasswordValid) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
