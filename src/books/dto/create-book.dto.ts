import { Chapter } from '../../chapters/interfaces/chapter.interface';

export class CreateBookDto {
  readonly title: string;
  readonly icon?: string;
  readonly chapters?: Chapter[];
}
