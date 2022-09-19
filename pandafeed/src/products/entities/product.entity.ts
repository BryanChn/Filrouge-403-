import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column({ nullable: true })
  name: string;

  @ApiProperty()
  @Column()
  essential: boolean;

  @ApiProperty()
  @Column()
  quantity: number;

  @ApiProperty()
  @Column()
  minimum: number;
}
