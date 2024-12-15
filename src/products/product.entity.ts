import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  brand: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;

  @Column('decimal', { precision: 3, scale: 1 })
  rating: number;

  @Column({ nullable: true })
  description: string;

  @Column('date')
  release_date: string;

  @Column({ nullable: true })
  warranty: string;

  @Column('json', { nullable: true })
  additional_info: object;
}
