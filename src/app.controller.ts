import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getNewOrder(order: any): void {
    console.log(order);
    //   if (order.category === 'foreign') {
    //     console.log(order);
    //   } else {
    //     process.exit();
    //   }
  }
}
