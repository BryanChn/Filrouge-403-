import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  products: string;

  @Column()
  quantity: number;

  @Column()
  essential: true;

  @Column()
  minimum: number;
}
