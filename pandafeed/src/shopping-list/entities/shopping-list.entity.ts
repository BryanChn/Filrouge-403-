import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
@Entity()
export class ShoppingList extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  done: boolean;

  @ApiProperty()
  @Column()
  date: Date;

  @ApiProperty()
  @Column({ nullable: true })
  endedDate?: Date;
}
