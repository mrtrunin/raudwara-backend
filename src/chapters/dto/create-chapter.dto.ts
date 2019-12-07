import { Section } from '../../sections/interfaces/section.interface';

export class CreateChapterDto {
  readonly title: string;
  readonly sections?: Section[];
}
