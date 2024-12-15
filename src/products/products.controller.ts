import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post('/create-product')
  async createProduct(@Body() productData: Product): Promise<Product> {
    return this.productsService.create(productData);
  }
  @Get()
  async getProducts(
    @Query('search') search: string,
    @Query('minPrice') minPrice: number,
    @Query('maxPrice') maxPrice: number,
    @Query('sortBy') sortBy: string,
    @Query('order') order: 'ASC' | 'DESC',
  ): Promise<Product[]> {
    return this.productsService.getProducts(
      search,
      minPrice,
      maxPrice,
      sortBy,
      order,
    );
  }
}
