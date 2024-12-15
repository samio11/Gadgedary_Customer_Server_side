import { IsInt, IsString, IsDecimal, Min, Max } from 'class-validator';

export class ReviewDTO {
  @IsInt()
  productId: number; // The product being reviewed

  @IsDecimal()
  @Min(1)
  @Max(5)
  rating: number; // Rating for the product (1 to 5)

  @IsString()
  comment: string; // Review comment text
}
