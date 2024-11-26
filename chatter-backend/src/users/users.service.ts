import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserInput: CreateUserInput) {
    return this.usersRepository.create({
      ...createUserInput,
      password: await this.hasPassword(createUserInput.password),
    });
  }

  private async hasPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async findAll() {
    return this.usersRepository.find({});
  }

  async findOne(id: string) {
    return this.usersRepository.findOne(({ _id }) => _id === id);
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {
    if (updateUserInput.password) {
      updateUserInput.password = await this.hasPassword(
        updateUserInput.password,
      );
    }
    return this.usersRepository.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...updateUserInput,
          password: updateUserInput.password,
        },
      },
    );
  }

  remove(_id: string) {
    return this.usersRepository.findOneAndDelete({ _id });
  }
}
