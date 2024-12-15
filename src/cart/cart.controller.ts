import { Controller, Post, Delete, Get, Param, Body } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Add product to cart
  @Post('add/:id')
  async addToCart(
    @Param('id') productId: number,
    @Body('quantity') quantity: number,
  ) {
    return await this.cartService.addProductToCart(productId, quantity);
  }

  // Remove product from cart
  @Delete('remove/:id')
  async removeFromCart(
    @Param('id') productId: number,
    @Body('quantity') quantity: number,
  ) {
    return await this.cartService.removeProductFromCart(productId, quantity);
  }

  // View all cart items
  @Get()
  async getCartItems() {
    return await this.cartService.getCartItems();
  }
}
