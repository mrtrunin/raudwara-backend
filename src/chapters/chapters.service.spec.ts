import { Test, TestingModule } from '@nestjs/testing';
import { ChaptersService } from './chapters.service';
import { Chapter } from './interfaces/chapter.interface';
import { Section } from 'src/sections/interfaces/section.interface';
import { getModelToken } from '@nestjs/mongoose';

describe('ChaptersService', () => {
  let service: ChaptersService;

  const sectionsMock: Section[] = [
    {
      id: '12hbeug7g8df217d2h89',
      type: 'definition',
      title: 'Hulk',
      content: 'mingi ühise tunnuse alusel määratud objektide kogum.',
    },
    {
      id: 'msjkdnijd2ndiun21iudn12y',
      type: 'definition',
      title: 'Hulga elemendid',
      content: 'objektid, mis üheskoos moodustavad hulga.',
    },
  ];

  const chapterMock: Chapter = {
    id: 'm90tr362r783hnbfdsa9f',
    title: 'Arvuhulgad',
    sections: sectionsMock,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChaptersService,
        { provide: getModelToken('Chapter'), useValue: chapterMock },
      ],
    }).compile();

    service = module.get<ChaptersService>(ChaptersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
