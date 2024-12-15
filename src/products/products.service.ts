import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  create(product: Product): Promise<Product> {
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  // Simple method to fetch products with optional filtering and sorting
  async getProducts(
    search: string = '',
    minPrice: number = 0,
    maxPrice: number = 10000,
    sortBy: string = 'price',
    order: 'ASC' | 'DESC' = 'ASC',
  ): Promise<Product[]> {
    const query = this.productRepository.createQueryBuilder('product');

    // Search filter
    if (search) {
      query.andWhere(
        'product.name LIKE :search OR product.category LIKE :search',
        { search: `%${search}%` },
      );
    }

    // Price range filter
    query.andWhere('product.price BETWEEN :minPrice AND :maxPrice', {
      minPrice,
      maxPrice,
    });

    // Sorting
    query.orderBy(`product.${sortBy}`, order);

    return await query.getMany();
  }
}
