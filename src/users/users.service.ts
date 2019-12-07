import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ username });
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    return await newUser.save();
  }

  async update(id: string, user: User): Promise<User> {
    const currentUser = await this.userModel.findOne({ _id: id });
    let isPasswordValid: boolean;

    if (!user.currentPassword) {
      throw new UnauthorizedException(
        `Password missing for user ${currentUser.firstName} ${currentUser.lastName} (${currentUser.email}). Please add currentPassword attribute to the request.`,
      );
    }

    try {
      isPasswordValid = await bcrypt.compare(
        user.currentPassword,
        currentUser.password,
      );
    } catch (error) {
      throw new InternalServerErrorException(
        `An error occured during password comparison: ${error.toString()}`,
      );
    }

    if (isPasswordValid === false) {
      throw new UnauthorizedException(
        `Invalid password for user ${currentUser.firstName} ${currentUser.lastName} (${currentUser.email}).`,
      );
    }

    let encryptedPassword: string;
    if (user.password && user.password.length) {
      try {
        encryptedPassword = await bcrypt.hash(user.password, 10);
      } catch (error) {
        throw new InternalServerErrorException(
          `An error occured during password hashing: ${error.toString()}`,
        );
      }
    }

    try {
      user.password = encryptedPassword;
      return await this.userModel.findByIdAndUpdate(id, user, {
        new: true,
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove({ _id: id });
  }
}
