import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
// import { firstValueFrom, map } from 'rxjs';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// import { OrderDto } from './order.dto';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getOrderDetails(order: number) {
    const api = new WooCommerceRestApi({
      url: 'https://socialviralclicks.com',
      consumerKey: 'ck_15e8dbc0b41de14b24f01293e8dd2137ff08aea2',
      consumerSecret: 'cs_cdc6d1a737f48c7ac2f038670cfd3a4255cd274a',
      version: 'wc/v3',
    });

    return api.get('orders/', order).then((response) => {
      console.log(response.data);
    });

    // return await firstValueFrom(
    //   this.httpService.get(api).pipe(
    //     map((res) => {
    //       return res.data;
    //     }),
    //   ),
    // );
    // const headersRequest = {
    //   consumerKey: 'ck_15e8dbc0b41de14b24f01293e8dd2137ff08aea2',
    //   consumerSecret: 'cs_cdc6d1a737f48c7ac2f038670cfd3a4255cd274a',
    //   queryStringAuth: true,
    // };

    // Axios to get order details

    // const responseData = await firstValueFrom(
    //   this.httpService
    //     .get(`https://socialviralclicks.com/wp-json/wc/v3/orders/${order}`, {
    //       headers: headersRequest,
    //     })
    //     .pipe(
    //       map((res) => {
    //         return res.data;
    //       }),
    //     ),
    // );
    // return responseData;

    // Check if order is foreign
    // if (orderDetails.meta_data[14].value === 'foreign') {
    //   // Process Order on JAP
    // }
    // console.log(`response`, response);
    // console.log(`Response Data`, response.data);

    // return `The order number is ${order}`;
  }

  // async getOrderDetailsBack(order: number) {
  //   // const headersRequest = {
  //   //   consumer_key: 'ck_15e8dbc0b41de14b24f01293e8dd2137ff08aea2',
  //   //   consumer_secret: 'cs_cdc6d1a737f48c7ac2f038670cfd3a4255cd274a',
  //   // };
  //   return await this.httpService.axiosRef
  //     .get(
  //       `https://socialviralclicks.com/wp-json/wc/v3/orders/${order}&consumer_key=ck_15e8dbc0b41de14b24f01293e8dd2137ff08aea2&consumer_secret=cs_cdc6d1a737f48c7ac2f038670cfd3a4255cd274a`,
  //     )
  //     .then((res) => res.data)
  //     .catch((err) => {
  //       throw new Error(
  //         err?.message + ': ' + JSON.stringify(err?.response?.data),
  //       );
  //     });
  // }
}
