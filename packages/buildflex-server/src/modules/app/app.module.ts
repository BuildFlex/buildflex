import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/postgres/prisma.module';
import { TableModule } from '../table/table.module';
import { ColumnModule } from '../column/column.module';
import { DataModule } from '../data/data.module';

@Module({
  imports: [PrismaModule, TableModule, ColumnModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
