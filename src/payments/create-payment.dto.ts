export class CreatePaymentDto {
  readonly customer: string;
  readonly amount: number;
  readonly delay: number;
}
