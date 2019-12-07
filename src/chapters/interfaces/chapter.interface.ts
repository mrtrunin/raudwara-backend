import { Section } from 'src/sections/interfaces/section.interface';

export interface Chapter {
  id?: string;
  title: string;
  sections?: Section[];
}
