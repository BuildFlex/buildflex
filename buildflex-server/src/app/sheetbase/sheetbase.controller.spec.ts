import { Test, TestingModule } from '@nestjs/testing';
import { SheetbaseController } from './sheetbase.controller';

describe('SheetbaseController', () => {
  let controller: SheetbaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SheetbaseController],
    }).compile();

    controller = module.get<SheetbaseController>(SheetbaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
