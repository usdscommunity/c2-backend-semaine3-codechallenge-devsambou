import { IsNumber } from 'class-validator';

export class CreateLoanDto {
  @IsNumber()
  bookId: number;

  @IsNumber()
  borrowerId: number;
}
