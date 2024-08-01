import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { SheetbaseModule } from './sheetbase/sheetbase.module';
import { SheetbaseController } from './sheetbase/sheetbase.controller';
import { SheetbaseService } from './sheetbase/sheetbase.service';
import { BuilderModule } from './builder/builder.module';
import { BuilderController } from './builder/builder.controller';
import { BuilderService } from './builder/builder.service';
import { WorkflowModule } from './workflow/workflow.module';
import { WorkflowController } from './workflow/workflow.controller';
import { WorkflowService } from './workflow/workflow.service';
import { WorkspaceModule } from './workspace/workspace.module';
import { WorkspaceController } from './workspace/workspace.controller';
import { WorkspaceService } from './workspace/workspace.service';
import { OrganizationModule } from '@app/organization/organization.module';
import { OrganizationService } from './organization/organization.service';
import { OrganizationController } from '@app/organization/organization.controller';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SheetbaseModule,
    BuilderModule,
    WorkflowModule,
    WorkspaceModule,
    OrganizationModule,
  ],
  controllers: [
    AppController,
    AuthController,
    UserController,
    SheetbaseController,
    BuilderController,
    WorkflowController,
    WorkspaceController,
    OrganizationController,
  ],
  providers: [
    AppService,
    AuthService,
    UserService,
    SheetbaseService,
    BuilderService,
    WorkflowService,
    WorkspaceService,
    OrganizationService,
  ],
})
export class AppModule {}
