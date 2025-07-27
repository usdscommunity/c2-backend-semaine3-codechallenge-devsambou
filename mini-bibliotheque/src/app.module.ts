import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LibraryModule } from './libraries/libraries.module';
import { BooksModule } from './books/books.module';
import { LoansModule } from './loans/loans.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Library } from './libraries/library.entity';
import { Book } from './books/book.entity';
import { Loan } from './loans/loan.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ✅ Charge .env automatiquement
    ConfigModule.forRoot({ isGlobal: true }),

    // ✅ Connexion à MySQL avec TypeORM
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT || 3306),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    autoLoadEntities: true,
  }),
    UsersModule, LibraryModule, BooksModule, LoansModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
