import { Test, TestingModule } from '@nestjs/testing';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';

describe('Chapters Controller', () => {
  let controller: ChaptersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChaptersController],
      providers: [
        {
          provide: ChaptersService,
          useValue: ChaptersService,
        },
      ],
    }).compile();

    controller = module.get<ChaptersController>(ChaptersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
