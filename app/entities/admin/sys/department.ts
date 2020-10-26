import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from '../../base';

@Entity({ name: 'sys_department' })
export default class SysDepartment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'parend_id', nullable: true })
  parentId: number;

  @Column()
  name: string;

  @Column({ name: 'order_num', type: 'int', nullable: true, default: 0 })
  orderNum: number;

}
