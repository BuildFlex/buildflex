import { Test, TestingModule } from '@nestjs/testing';
import { SheetbaseService } from './sheetbase.service';

describe('SheetbaseService', () => {
  let service: SheetbaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SheetbaseService],
    }).compile();

    service = module.get<SheetbaseService>(SheetbaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
