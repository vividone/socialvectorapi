import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/order')
  async getNewOrder(@Body() order: any) {
    const { id } = order;
    console.log(order);
    return await this.appService.getOrderDetails(id);
    // return console.log(orderDto);
  }
}
