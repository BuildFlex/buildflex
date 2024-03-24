import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TableService } from './table.service';
import CreateTableDto from './dto/createTable.dto';
import UpdateTableDto from './dto/updateTable.dto';
import BaseController from '../../baseController';

@Controller('table')
export class TableController extends BaseController {
  constructor(private readonly tableService: TableService) {
    super();
  }

  @Get()
  public async getAll() {
    try {
      const tables = await this.tableService.getMany();
      return this.successfulResponse(tables);
    } catch (e) {
      return this.errorResponse(e);
    }
  }

  @Get(':tableId')
  public async getOne(@Param('tableId') tableId: string) {
    try {
      const table = await this.tableService.getOne(tableId);
      return this.successfulResponse(table);
    } catch (e) {
      return this.errorResponse(e);
    }
  }

  @Post()
  public async create(@Body() body: CreateTableDto) {
    try {
      await this.tableService.create(body);
      return this.successfulResponse({});
    } catch (e) {
      console.log(e);
      return this.errorResponse(e);
    }
  }

  @Put(':tableId')
  public async update(
    @Body() body: UpdateTableDto,
    @Param('tableId') tableId: string
  ) {
    try {
      await this.tableService.update(body, tableId);
      return this.successfulResponse({});
    } catch (e) {
      return this.errorResponse(e);
    }
  }

  @Delete(':tableId')
  public async delete(@Param('tableId') tableId: string) {
    try {
      await this.tableService.delete(tableId);
      return this.successfulResponse({});
    } catch (e) {
      return this.errorResponse(e);
    }
  }
}
