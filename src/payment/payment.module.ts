import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from '../cart/cart.entity';
import { Payment } from './payment.entity';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Payment])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
