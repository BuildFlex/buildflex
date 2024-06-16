import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/postgres/prisma.service';

@Injectable()
export class DataService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getOne(tableId: string) {
    const columns = await this.prismaService.column.findMany({
      where: {
        tableId,
      },
      orderBy: {
        order: 'asc',
      },
      select: {
        columnId: true,
        name: true,
        type: true,
        order: true,
        width: true,
        description: true,
      },
    });

    const rows = await this.prismaService.row.findMany({
      where: {
        tableId,
      },
      orderBy: {
        order: 'asc',
      },
    });

    return {
      columns,
      rows,
    };
  }
}
