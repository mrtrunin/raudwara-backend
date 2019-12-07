import { Chapter } from 'src/chapters/interfaces/chapter.interface';

export interface Book {
  id?: string;
  title: string;
  chapters?: Chapter[];
}
