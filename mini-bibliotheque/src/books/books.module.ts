import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Book } from './book.entity';
import { Library } from 'src/libraries/library.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, Library]) 
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BooksModule {}
