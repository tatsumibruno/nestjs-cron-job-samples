import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'payment'
})
export class Payment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 300 })
  customer: string;

  @Column({ length: 100 })
  status: string;

  @Column('decimal')
  amount: number;

  @Column()
  delay: number;
}
