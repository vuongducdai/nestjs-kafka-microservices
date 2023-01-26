import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDto } from './create-order.dto';
import { CreateOrderEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE')
    private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderDto: CreateOrderDto) {
    const { userId, price } = createOrderDto;

    // The second parameter will automatically stringify if it's object
    // In this case we pass in a class, Nestjs will call toString in that class
    // So we need to define our own toString method
    this.billingClient.emit(
      'order_created',
      new CreateOrderEvent('123', userId, price),
    );
  }
}
