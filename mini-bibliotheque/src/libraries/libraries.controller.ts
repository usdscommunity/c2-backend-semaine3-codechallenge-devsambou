import { Controller, Post, Body } from '@nestjs/common';
import { LibraryService } from './libraries.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Libraries')
@Controller('libraries')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une bibliothèque pour un utilisateur' })
  @ApiResponse({ status: 201, description: 'Bibliothèque créée avec succès' })
  create(@Body() dto: CreateLibraryDto) {
    return this.libraryService.create(dto);
  }
}