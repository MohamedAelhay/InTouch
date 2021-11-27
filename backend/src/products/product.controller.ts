import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async getProduct(@Res() response, @Param('id') prodId: number) {
    const product = await this.productService.getProductById(prodId);
    return response.status(HttpStatus.OK).json({ product });
  }

  @Get()
  async getAllProducts(@Res() response) {
    const products = await this.productService.getProducts();
    return response.status(HttpStatus.OK).json({ products });
  }

  @Post()
  async addProduct(@Res() response, @Body('product') product: Product) {
    const createdProduct = await this.productService.insertProduct(product);
    return response.status(HttpStatus.CREATED).json({ createdProduct });
  }

  @Patch(':id')
  async updateProduct(
    @Res() response,
    @Param('id') prodId: number,
    @Body('product') product: Product,
  ) {
    const updatedProduct = await this.productService.updateProduct(
      prodId,
      product,
    );
    return response.status(HttpStatus.OK).json({ updatedProduct });
  }

  @Delete(':id')
  async removeProduct(@Res() response, @Param('id') prodId: number) {
    const deleteResult = await this.productService.deleteProduct(prodId);
    return response.status(HttpStatus.OK).json({ deleteResult });
  }
}
