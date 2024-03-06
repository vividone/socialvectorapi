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
    // return console.log(orderDto);
    const metas = orderDto.meta_data;

    const product_cat = metas[14].value;
    // const obj = metas.((k) => k.key === 'product_cat');
    // console.log(obj);
    if (product_cat === 'foreign') {
      console.log(orderDto);
    } else {
      process.exit();
    }
  }
}
