import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderDto } from './order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/order')
  getNewOrder(@Body() orderDto: OrderDto): void {
    return console.log(orderDto);
    //   if (order.category === 'foreign') {
    //     console.log(order);
    //   } else {
    //     process.exit();
    //   }
  }
}
