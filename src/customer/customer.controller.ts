import { Controller, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.customerService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.customerService.login(loginDto);
  }
}
