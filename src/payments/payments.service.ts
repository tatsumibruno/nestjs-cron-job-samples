import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreatePaymentDto } from './create-payment.dto';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentsService {

  private repository: Repository<Payment>;

  constructor(@Inject('DATA_SOURCE') readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(Payment);
  }

  async create(createPaymentDto: CreatePaymentDto) {
    const payment: Payment = {
      customer: createPaymentDto.customer,
      amount: createPaymentDto.amount,
      delay: createPaymentDto.delay,
      status: 'PENDING',
    };
    await this.repository.save(payment);
  }
}
