import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColumnService } from './column.service';
import CreateColumnDto from './dto/createColumn.dto';
import UpdateColumnDto from './dto/updateColumn.dto';
import BaseController from '../../baseController';

@Controller('column')
export class ColumnController extends BaseController {
  constructor(private readonly columnService: ColumnService) {
    super();
  }

  @Get()
  public async getAll() {
    try {
      const columns = await this.columnService.getMany();
      return this.successfulResponse(columns);
    } catch (e) {
      return this.errorResponse(e);
    }
  }

  @Get(':columnId')
  public async getOne(@Param('columnId') columnId: string) {
    try {
      const column = await this.columnService.getOne(columnId);
      return this.successfulResponse(column);
    } catch (e) {
      return this.errorResponse(e);
    }
  }

  @Post()
  public async create(@Body() body: CreateColumnDto) {
    try {
      await this.columnService.create(body);
      return this.successfulResponse({});
    } catch (e) {
      return this.errorResponse(e);
    }
  }

  @Patch(':columnId')
  public async update(
    @Body() body: UpdateColumnDto,
    @Param('columnId') columnId: string
  ) {
    try {
      await this.columnService.update(body, columnId);
      return this.successfulResponse({});
    } catch (e) {
      return this.errorResponse(e);
    }
  }

  @Delete(':columnId')
  public async delete(@Param('columnId') columnId: string) {
    try {
      await this.columnService.delete(columnId);
      return this.successfulResponse({});
    } catch (e) {
      return this.errorResponse(e);
    }
  }
}
