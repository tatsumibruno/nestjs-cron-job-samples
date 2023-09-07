import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database.module';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class AppModule {}
