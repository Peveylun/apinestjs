import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    await this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({});
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: number) {
    this.userModel.findByIdAndDelete(id);
  }
}
