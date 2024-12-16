import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async processPayment(cartId: number): Promise<Payment> {
    // Find the cart item by ID
    const cart = await this.cartRepository.findOne({ where: { id: cartId } });

    if (!cart) {
      throw new NotFoundException(`Cart with ID ${cartId} not found.`);
    }

    if (cart.payment_status === 'Payed') {
      throw new Error('This cart item has already been paid for.');
    }

    // Create a new payment record
    const payment = this.paymentRepository.create({
      cart_id: cart.id,
      amount: cart.price * cart.quantity,
      payment_status: 'Payed',
    });

    await this.paymentRepository.save(payment);

    // Delete the product from the cart after payment
    await this.cartRepository.delete(cartId);

    return payment;
  }
}
