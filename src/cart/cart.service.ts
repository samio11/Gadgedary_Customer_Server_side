import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from '../products/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Add product to cart
  async addProductToCart(productId: number, quantity: number): Promise<Cart> {
    const product = await this.productRepository.findOneBy({ id: productId });

    if (!product) throw new NotFoundException('Product not found');
    if (product.stock < quantity)
      throw new BadRequestException('Not enough stock available');

    // Check if product already exists in cart
    let cartItem = await this.cartRepository.findOneBy({
      product_id: productId,
    });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = this.cartRepository.create({
        product_id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      });
    }

    // Update product stock
    product.stock -= quantity;
    await this.productRepository.save(product);

    return await this.cartRepository.save(cartItem);
  }

  // Remove product from cart
  async removeProductFromCart(
    productId: number,
    quantity: number,
  ): Promise<string> {
    const cartItem = await this.cartRepository.findOneBy({
      product_id: productId,
    });

    if (!cartItem) throw new NotFoundException('Product not in cart');

    const product = await this.productRepository.findOneBy({ id: productId });
    if (!product) throw new NotFoundException('Product not found');

    if (quantity >= cartItem.quantity) {
      // Remove entire cart item
      await this.cartRepository.remove(cartItem);
    } else {
      // Reduce cart quantity
      cartItem.quantity -= quantity;
      await this.cartRepository.save(cartItem);
    }

    // Update product stock
    product.stock += quantity;
    await this.productRepository.save(product);

    return 'Product removed from cart';
  }

  // View all cart items
  async getCartItems(): Promise<Cart[]> {
    return await this.cartRepository.find();
  }
}
