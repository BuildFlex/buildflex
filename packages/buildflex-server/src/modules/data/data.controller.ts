import { Controller, Get, Param } from '@nestjs/common';
import { DataService } from './data.service';
import BaseController from '../../baseController';

@Controller('dataTable')
export class DataController extends BaseController {
  constructor(private readonly dataService: DataService) {
    super();
  }

  @Get(':tableId')
  public async getOne(@Param('tableId') tableId: string) {
    try {
      const table = await this.dataService.getOne(tableId);
      return this.successfulResponse(table);
    } catch (e) {
      return this.errorResponse(e);
    }
  }
}
