import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Library } from './library.entity';
import { CreateLibraryDto } from './dto/create-library.dto';
import { User } from '../users/user.entity';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private readonly libraryRepo: Repository<Library>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async create(dto: CreateLibraryDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
     if (!user) {
    throw new NotFoundException(`L'utilisateur avec l'ID ${dto.userId} est introuvable`);
  }
    const library = this.libraryRepo.create({ name: dto.name, location: dto.location, user });
    return this.libraryRepo.save(library);
  }
}