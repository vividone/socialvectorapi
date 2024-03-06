import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getOrderDetails(order: number): string {
    // Axios to get order details
    // Check if order is foreign
    // Process Order on JAP
    return `The order number is ${order}`;
  }
}
