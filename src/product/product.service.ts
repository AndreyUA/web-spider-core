import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  async getAllProducts(): Promise<unknown> {
    return 'getAllProducts';
  }

  async addNewProduct(): Promise<unknown> {
    return 'addNewProduct';
  }
}
