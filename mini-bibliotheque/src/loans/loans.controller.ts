import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { LoanService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  create(@Body() dto: CreateLoanDto) {
    return this.loanService.create(dto);
  }

  @Patch(':id/return')
  return(@Param('id') id: string) {
    return this.loanService.returnLoan(+id);
  }
}