import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  insertProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  getProductById(prodId: number): Promise<Product> {
    return this.productRepository.findOne(prodId);
  }

  async updateProduct(prodId: number, updatedProduct: Product) {
    const product = await this.productRepository.findOneOrFail(prodId);

    if (!product) {
      throw new NotFoundException('Could not find Product.');
    }

    return this.productRepository.update(prodId, updatedProduct);
  }

  deleteProduct(prodId: number) {
    return this.productRepository.delete(prodId);
  }
}
