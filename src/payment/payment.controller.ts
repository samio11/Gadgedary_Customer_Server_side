import { Controller, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './payment.entity';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post(':cartId')
  async makePayment(@Param('cartId') cartId: number): Promise<Payment> {
    return this.paymentService.processPayment(cartId);
  }
}
