import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number; // Which product this review is for

  @Column()
  customerId: number; // Customer who submitted the review

  @Column('decimal', { precision: 3, scale: 1 })
  rating: number; // Rating from 1 to 5

  @Column('text')
  comment: string; // Review comment
}
