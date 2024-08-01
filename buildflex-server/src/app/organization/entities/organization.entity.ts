import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '@app/user/entities/user.entity';
import { Workspace } from '@app/workspace/entities/workspace.entity';
import { UserOrganization } from './user-organization.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.organizations)
  user: User;

  @OneToMany(() => Workspace, (workspace) => workspace.organization)
  workspaces: Workspace[];

  @OneToMany(
    () => UserOrganization,
    (userOrganization) => userOrganization.organization,
  )
  userOrganizations: UserOrganization[];
}
