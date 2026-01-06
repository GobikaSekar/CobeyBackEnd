import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class StoreService {

  async testConnection(storeUrl: string, key: string, secret: string) {
    try {
      await axios.get(`${storeUrl}/wp-json/wc/v3/orders`, {
        auth: { username: key, password: secret },
        timeout: 5000,
      });
      return true;
    } catch (error) {
      throw new BadRequestException('Invalid WooCommerce credentials');
    }
  }
}
