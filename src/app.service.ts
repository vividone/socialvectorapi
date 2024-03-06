import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
// import { OrderDto } from './order.dto';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getOrderDetails(order: number) {
    const headersRequest = {
      consumer_key: 'ck_15e8dbc0b41de14b24f01293e8dd2137ff08aea2',
      consumer_secret: 'cs_cdc6d1a737f48c7ac2f038670cfd3a4255cd274a',
    };

    // Axios to get order details
    const response = await firstValueFrom(
      this.httpService.get(
        `https://socialviralclicks.com/wp-json/wc/v3/orders/${order}`,
        {
          headers: headersRequest,
        },
      ),
    );
    // Check if order is foreign
    // if (orderDetails.meta_data[14].value === 'foreign') {
    //   // Process Order on JAP
    // }
    console.log(`response`, response);
    console.log(`Response Data`, response.data);

    // return `The order number is ${order}`;
  }
}
