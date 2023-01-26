import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDto } from './create-order.dto';

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
  }
}
