import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../customer/customer.entity';
import { ManageCustomerController } from './manage-customer.controller';
import { ManageCustomerService } from './manage-customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [ManageCustomerController],
  providers: [ManageCustomerService],
})
export class ManageCustomerModule {}
