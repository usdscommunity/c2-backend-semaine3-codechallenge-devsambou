import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsBoolean()
  available: boolean;

  @IsNumber()
  libraryId: number;
}
