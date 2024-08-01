import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '@app/user/entities/user.entity';
import { Organization } from '@app/organization/entities/organization.entity';
import { Category } from './category.entity';

@Entity()
export class Workspace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.workspaces)
  user: User;

  @ManyToOne(() => User, (user) => user.workspaces)
  admin: User;

  @ManyToOne(() => Organization, (organization) => organization.workspaces)
  organization: Organization;

  @OneToMany(() => Category, (category) => category.workspace)
  categories: Category[];
}
