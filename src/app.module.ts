import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database.module';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';
import { PaymentCronsService } from './payments/payment.crons.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    DatabaseModule,
    ScheduleModule.forRoot()
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentCronsService],
})
export class AppModule {}
