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
}
