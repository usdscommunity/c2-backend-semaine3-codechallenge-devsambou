import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

   @Post()
  @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
  @ApiResponse({ status: 201, description: 'Utilisateur créé' })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les utilisateurs' })
  @ApiResponse({ status: 200, description: 'Liste des utilisateurs retournée avec succès' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id/loans')
  @ApiOperation({ summary: 'Lister les prêts d’un utilisateur' })
  @ApiResponse({ status: 200, description: 'Prêts de l’utilisateur retournés avec succès' })
  getLoans(@Param('id') id: string) {
    return this.userService.findUserLoans(+id);
  }
}