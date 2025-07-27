import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Library } from '../libraries/library.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  genre: string;

  @Column({ default: true })
  available: boolean;

  @ManyToOne(() => Library, library => library.books, { eager: true })
  library: Library;
}
