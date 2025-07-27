import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { BookService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

 @Post()
  @ApiOperation({ summary: 'Ajouter un livre à une bibliothèque' })
  @ApiResponse({ status: 201, description: 'Livre ajouté avec succès' })
  create(@Body() dto: CreateBookDto) {
    return this.bookService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister les livres disponibles ou par genre' })
  @ApiResponse({ status: 200, description: 'Liste des livres retournée avec succès' })
  find(@Query('available') available: string, @Query('genre') genre: string) {
    if (available === 'true') return this.bookService.findAvailable();
    if (genre) return this.bookService.findByGenre(genre);
  }
}