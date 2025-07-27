import { Module } from '@nestjs/common';
import { LibraryController } from './libraries.controller';
import { LibraryService } from './libraries.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from './library.entity';
import { User } from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Library, User]), 
    UsersModule, // ✅ nécessaire
  ],
  controllers: [LibraryController],
  providers: [LibraryService]
})
export class LibraryModule {}
