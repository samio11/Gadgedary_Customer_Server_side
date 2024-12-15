import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { ReviewDTO } from './review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  // Add a new review
  async addReview(reviewDTO: ReviewDTO): Promise<Review> {
    const review = this.reviewRepository.create(reviewDTO);
    return await this.reviewRepository.save(review);
  }

  // Get all reviews for a product
  async getProductReviews(productId: number): Promise<Review[]> {
    return this.reviewRepository.find({ where: { productId } });
  }
}
