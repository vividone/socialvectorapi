import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
// import { firstValueFrom, map } from 'rxjs';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// import { OrderDto } from './order.dto';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async processOrder(id: number) {
    const api = new WooCommerceRestApi({
      url: process.env.woo_url,
      consumerKey: process.env.consumerKey,
      consumerSecret: process.env.consumerSecret,
      version: 'wc/v3',
    });

    const fetchData = `orders/${id}`;
    const orderDetails: any = await api.get(fetchData).then((response) => {
      return response.data;
    });

    const foreignOrder = orderDetails.meta_data[14].value;
    const orderQty = orderDetails.line_items[0].quantity;
    const sku = orderDetails.line_items[0].sku;
    const link =
      orderDetails.line_items[0].meta_data[5].value[0].tmcp_post_fields
        .tmcp_textfield_0;
    const username =
      orderDetails.line_items[0].meta_data[5].value[0].tmcp_post_fields
        .tmcp_textfield_0;
    let quantity: number;

    if (
      sku === 2918 ||
      2929 ||
      5026 ||
      2108 ||
      2133 ||
      2934 ||
      322 ||
      2127 ||
      5025 ||
      2919 ||
      5024 ||
      6835 ||
      2135 ||
      1845 ||
      1823 ||
      1782 ||
      1805 ||
      1813 ||
      8527 ||
      6859
    ) {
      quantity = orderQty * 1000;
    } else if (sku === 6004 || 7088) {
      quantity = orderQty * 1;
    }

    if (foreignOrder === 'foreign') {
      const order = {
        key: process.env.apikey,
        action: 'add',
        link: link,
        username: username,
        service: sku,
        quantity: quantity,
      };
      const postOrder = await this.httpService.axiosRef
        .post(process.env.jap_url, order)
        .then((res) => res.data)
        .catch((err) => {
          throw new Error(
            err?.message + ': ' + JSON.stringify(err?.response?.data),
          );
        });

      return postOrder;
    }
    //   // return postOrder;
    else {
      console.log('Order is not foreign');
    }

    // switch (String(orderDetails.line_items[0].parent_name)) {
    //   case 'Instagram Thread Likes':
    //     console.log('Instagram Thread Likes');
    //   // const package_order = {
    //   //   key: jap_apikey,
    //   //   action: 'add',
    //   //   service: '',
    //   //   link: '',
    //   // };
    //   case 'Instagram Thread Followers':
    //     console.log('Instagram Thread Likes');

    //   case 'Instagram Threads Shares/Comments':
    //     console.log('Instagram Threads Shares/Comments');

    //   default:
    //     console.log('This is default');
    // }

    // Get order details from JPA

    // // console.log(orderDetails);
  }
}
