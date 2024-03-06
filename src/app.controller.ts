import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/order')
  async getNewOrder(@Body() order: number) {
    return await this.appService.getOrderDetails(order);
    // return console.log(orderDto);
  }
}
