import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Book } from '../books/book.entity';
import { User } from '../users/user.entity';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, { eager: true })
  book: Book;

  @ManyToOne(() => User, user => user.loans)
  borrower: User;

  @CreateDateColumn()
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column({ default: false })
  returned: boolean;
}
