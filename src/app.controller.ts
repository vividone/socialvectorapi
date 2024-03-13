import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/order')
  async getNewOrder(@Body() order: any) {
    const { id } = order;
    return await this.appService.processOrder(id);
    // return console.log(orderDto);
  }

  // @Post('/v2/order')
  // async getNewOrderBack(@Body() order: any) {
  //   const { id } = order;
  //   return await this.appService.getOrderDetailsBack(id);
  //   // return console.log(orderDto);
  // }
}
