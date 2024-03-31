import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/postgres/prisma.service';
import CreateTableDto from './dto/createTable.dto';
import UpdateTableDto from './dto/updateTable.dto';
import { updateOrder } from '../../common/updateOrder';

@Injectable()
export class TableService {
  constructor(private readonly prismaService: PrismaService) {}

  public getMany() {
    return this.prismaService.table.findMany({
      orderBy: {
        order: 'asc',
      },
    });
  }

  public getOne(tableId: string) {
    return this.prismaService.table.findFirstOrThrow({
      where: {
        tableId,
      },
    });
  }

  public create(data: CreateTableDto) {
    return this.prismaService.$transaction(async (prisma) => {
      await updateOrder(prisma.table, {}, { new: data.order });
      return prisma.table.create({
        data: {
          name: data.name,
          order: data.order,
        },
      });
    });
  }

  public async update(data: UpdateTableDto, tableId: string) {
    const table = await this.getOne(tableId);
    return this.prismaService.$transaction(async (prisma) => {
      await updateOrder(
        prisma.table,
        {},
        {
          new: data.order,
          old: table.order,
        }
      );
      return prisma.table.update({
        where: {
          tableId,
        },
        data: {
          order: data.order,
          name: data.name,
        },
      });
    });
  }

  public async delete(tableId: string) {
    const table = await this.getOne(tableId);
    return this.prismaService.$transaction(async (prisma) => {
      await updateOrder(
        prisma.table,
        {},
        {
          old: table.order,
        }
      );
      await prisma.table.delete({
        where: {
          tableId,
        },
      });
    });
  }
}
