import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    const { userId, price } = orderCreatedEvent;
    console.log(userId, price);
  }
}
