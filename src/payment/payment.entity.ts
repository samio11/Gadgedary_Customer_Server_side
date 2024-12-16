import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number; // Unique Payment ID

  @Column()
  cart_id: number; // Reference to Cart ID

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number; // Payment Amount

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  payment_date: Date; // Payment Date

  @Column({
    type: 'enum',
    enum: ['Pending', 'Payed'],
    default: 'Payed', // Default status
  })
  payment_status: 'Pending' | 'Payed'; // Payment Status
}
