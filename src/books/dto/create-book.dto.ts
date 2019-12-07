import { Chapter } from '../../chapters/interfaces/chapter.interface';

export class CreateBookDto {
  readonly title: string;
  readonly chapters?: Chapter[];
}
