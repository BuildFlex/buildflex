import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { PrismaModule } from '../prisma/postgres/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
