import { Module } from '@nestjs/common';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';
import { PrismaModule } from '../prisma/postgres/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ColumnController],
  providers: [ColumnService],
})
export class AppModule {}
