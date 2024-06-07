import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/postgres/prisma.service';
import CreateTableDto from './dto/createTable.dto';
import UpdateTableDto from './dto/updateTable.dto';

@Injectable()
export class TableService {
  constructor(private readonly prismaService: PrismaService) {}

  public getMany() {
    return this.prismaService.table.findMany();
  }

  public getOne(tableId: string) {
    return this.prismaService.table.findFirstOrThrow({
      where: {
        tableId,
      },
    });
  }

  public create(data: CreateTableDto) {
    return this.prismaService.table.create({ data });
  }

  public update(data: UpdateTableDto, tableId: string) {
    return this.prismaService.table.update({
      where: {
        tableId,
      },
      data,
    });
  }

  public delete(tableId: string) {
    return this.prismaService.table.delete({
      where: {
        tableId,
      },
    });
  }
}
