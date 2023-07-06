import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<unknown> {
    const allProducts = await this.productService.getAllProducts();

    return allProducts;
  }

  @Post()
  async addNewProduct(): Promise<unknown> {
    const newProductResponse = await this.productService.addNewProduct();

    return newProductResponse;
  }
}
