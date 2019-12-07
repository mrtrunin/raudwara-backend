import { Test, TestingModule } from '@nestjs/testing';
import { SectionsService } from './sections.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section } from './interfaces/section.interface';

describe('SectionsService', () => {
  let service: SectionsService;

  const sectionMock: Section = {
    id: '12hbeug7g8df217d2h89',
    type: 'definition',
    title: 'Hulk',
    content: 'mingi ühise tunnuse alusel määratud objektide kogum.',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SectionsService,
        { provide: getModelToken('Section'), useValue: sectionMock },
      ],
    }).compile();

    service = module.get<SectionsService>(SectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
