import { Module } from '@nestjs/common';
import { LoanController } from './loans.controller';
import { LoanService } from './loans.service';
import { BooksModule } from 'src/books/books.module';
import { UsersModule } from 'src/users/users.module';
import { Loan } from './loan.entity';
import { User } from 'src/users/user.entity';
import { Book } from 'src/books/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Loan, Book, User]),
    UsersModule,
    BooksModule
  ],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoansModule {}
