import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './entities/user.entity';
import { AbstractRepository } from '../common/database/abstract.repository';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger();

  constructor(@InjectModel(User.name) userModel: Model<User>) {
    super(userModel);
  }
}
