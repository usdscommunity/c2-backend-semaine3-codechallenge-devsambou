import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './loan.entity';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Book } from '../books/book.entity';
import { User } from '../users/user.entity';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepo: Repository<Loan>,
    @InjectRepository(Book)
    private readonly bookRepo: Repository<Book>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async create(dto: CreateLoanDto) {
    const book = await this.bookRepo.findOne({ where: { id: dto.bookId } });
    const borrower = await this.userRepo.findOne({ where: { id: dto.borrowerId } });
     if (!book) {
    throw new NotFoundException(`Livre avec l'ID ${dto.bookId} non trouvé`);
  }

  if (!borrower) {
    throw new NotFoundException(`Utilisateur avec l'ID ${dto.borrowerId} non trouvé`);
  }

  if (!book.available) {
    throw new Error('Ce livre n’est pas disponible pour le moment.');
  }
    book.available = false;
    await this.bookRepo.save(book);
    const loan = this.loanRepo.create({ book, borrower });
    return this.loanRepo.save(loan);
  }

  async returnLoan(id: number) {
    const loan = await this.loanRepo.findOne({ where: { id }, relations: ['book'] });
     if (!loan) {
    throw new Error(`Le prêt avec l'ID ${id} n'existe pas.`);
  }
    loan.returned = true;
    loan.end_date = new Date();
    if (!loan.book) {
    throw new NotFoundException(`Livre lié au prêt introuvable`);
  }
    loan.book.available = true;
    await this.bookRepo.save(loan.book);
    return this.loanRepo.save(loan);
  }
}