import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DataSource, Repository } from 'typeorm';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentCronsService {
  private readonly logger: Logger = new Logger(PaymentCronsService.name);
  private paymentRepository: Repository<Payment>;

  constructor(@Inject('DATA_SOURCE') readonly dataSource: DataSource) {
    this.paymentRepository = dataSource.getRepository(Payment);
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async executePendings() {
    const pendingPayments = await this.paymentRepository.find({
      where: {
        status: 'PENDING'
      }
    });
    for (const payment of pendingPayments) {
      await this.processPayment(payment);
    }
  }

  processPayment(payment: Payment): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        payment.status = 'FINISHED';
        this.paymentRepository.save(payment)
          .then(() => {
            this.logger.log(`Payment for ${payment.customer} of ${payment.amount} finished.`);
            resolve();
          })
          .catch(reject);
      }, payment.delay)
    });
  }
}

