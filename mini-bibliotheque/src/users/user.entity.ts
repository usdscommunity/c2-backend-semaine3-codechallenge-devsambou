import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Library } from '../libraries/library.entity';
import { Loan } from '../loans/loan.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Library, library => library.user)
  library: Library;

  @OneToMany(() => Loan, loan => loan.borrower)
  loans: Loan[];
}
