import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { Library } from '../libraries/library.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepo: Repository<Book>,
    @InjectRepository(Library)
    private readonly libraryRepo: Repository<Library>
  ) {}

  async create(dto: CreateBookDto) {
    const library = await this.libraryRepo.findOne({ where: { id: dto.libraryId } });
    if (!library) {
    throw new NotFoundException(`La bibliothèque avec l'ID ${dto.libraryId} est introuvable`);
  }
    const book = this.bookRepo.create({
  title: dto.title,
  author: dto.author,
  genre: dto.genre,
  available: dto.available,
  library,
});
    return this.bookRepo.save(book);
  }

  findAvailable() {
    return this.bookRepo.find({ where: { available: true } });
  }

  findByGenre(genre: string) {
    return this.bookRepo.find({ where: { genre } });
  }
}