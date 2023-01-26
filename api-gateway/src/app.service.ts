import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderDto: CreateOrderDto) {
    const { userId, price } = createOrderDto;
  }
}
