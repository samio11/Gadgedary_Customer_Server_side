import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ManageCustomerService } from './manage-customer.service';
import { UpdateCustomerDto } from './update-customer.dto';

@Controller('manage-customer')
export class ManageCustomerController {
  constructor(private readonly manageCustomerService: ManageCustomerService) {}

  // View Account
  @Get('/:id')
  async viewAccount(@Param('id') id: number) {
    const customer = await this.manageCustomerService.viewAccount(id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  // Update Account
  @Put('/:id')
  async updateAccount(
    @Param('id') id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.manageCustomerService.updateAccount(id, updateCustomerDto);
  }
}
