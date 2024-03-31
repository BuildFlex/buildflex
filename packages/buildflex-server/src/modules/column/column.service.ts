import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/postgres/prisma.service';
import CreateColumnDto from './dto/createColumn.dto';
import UpdateColumnDto from './dto/updateColumn.dto';
import { updateOrder } from '../../common/updateOrder';

@Injectable()
export class ColumnService {
  constructor(private readonly prismaService: PrismaService) {}

  public getMany() {
    return this.prismaService.column.findMany();
  }

  public getOne(columnId: string) {
    return this.prismaService.column.findFirstOrThrow({
      where: {
        columnId,
      },
    });
  }

  public create(data: CreateColumnDto) {
    return this.prismaService.$transaction(async (prisma) => {
      await updateOrder(
        prisma.column,
        { tableId: data.tableId },
        { new: data.order }
      );
      await prisma.column.create({
        data: {
          name: data.name,
          type: data.type,
          description: data.description,
          order: data.order,
          width: data?.width,
          table: { connect: { tableId: data.tableId } },
        },
      });
    });
  }

  public async update(data: UpdateColumnDto, columnId: string) {
    const column = await this.getOne(columnId);
    return this.prismaService.$transaction(async (prisma) => {
      await updateOrder(
        prisma.column,
        { tableId: column.tableId },
        {
          new: data.order,
          old: column.order,
        }
      );
      await prisma.column.update({
        where: {
          columnId,
        },
        data: {
          type: data.type,
          description: data.description,
          order: data.order,
        },
      });
    });
  }

  public async delete(columnId: string) {
    const column = await this.getOne(columnId);
    return this.prismaService.$transaction(async (prisma) => {
      await updateOrder(
        prisma.column,
        { tableId: column.tableId },
        {
          old: column.order,
        }
      );
      await prisma.column.delete({
        where: {
          columnId,
        },
      });
    });
  }
}
