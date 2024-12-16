import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number; // Unique cart ID

  @Column()
  product_id: number; // Reference to Product ID

  @Column()
  name: string; // Product Name

  @Column('decimal', { precision: 10, scale: 2 })
  price: number; // Product Price

  @Column()
  quantity: number; // Quantity in cart

  @Column({
    type: 'enum',
    enum: ['Pending', 'Payed'],
    default: 'Pending', // Default payment status
  })
  payment_status: 'Pending' | 'Payed'; // Payment Status
}
