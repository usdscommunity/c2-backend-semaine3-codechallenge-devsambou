import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Book } from '../books/book.entity';

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToOne(() => User, user => user.library)
  @JoinColumn()
  user: User;

  @OneToMany(() => Book, book => book.library)
  books: Book[];
}
