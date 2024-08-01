import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '@app/user/entities/user.entity';
import { Organization } from './organization.entity';

@Entity()
export class UserOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userOrganizations)
  user: User;

  @ManyToOne(
    () => Organization,
    (organization) => organization.userOrganizations,
  )
  organization: Organization;

  @Column()
  role: string; // 'admin' or 'member'
}
