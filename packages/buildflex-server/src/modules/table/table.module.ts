import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.service';
import { PrismaModule } from '../prisma/postgres/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TableController],
  providers: [TableService],
})
export class AppModule {}
