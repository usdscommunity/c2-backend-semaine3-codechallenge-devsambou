import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLibraryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  userId: number;
}
