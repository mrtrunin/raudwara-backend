import { Test, TestingModule } from '@nestjs/testing';
import { SectionsController } from './sections.controller';
import { SectionsService } from './sections.service';

describe('Sections Controller', () => {
  let controller: SectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionsController],
      providers: [
        {
          provide: SectionsService,
          useValue: SectionsService,
        },
      ],
    }).compile();

    controller = module.get<SectionsController>(SectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
