import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(data: CreateUserDto) {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find({ relations: ['library', 'loans'] });
  }

  findUserLoans(userId: number) {
    return this.userRepository.findOne({
      where: { id: userId },
      relations: ['loans', 'loans.book'],
    });
  }
}