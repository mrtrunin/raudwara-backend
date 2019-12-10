import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chapter } from './interfaces/chapter.interface';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectModel('Chapter') private readonly chapterModel: Model<Chapter>,
  ) {}

  async findAll(): Promise<Chapter[]> {
    return await this.chapterModel.find();
  }

  async findOne(id: string): Promise<Chapter> {
    return await this.chapterModel.findOne({ _id: id }).populate('sections');
  }

  async create(chapter: Chapter): Promise<Chapter> {
    const newChapter = new this.chapterModel(chapter);
    return await newChapter.save();
  }

  async update(id: string, chapter: Chapter): Promise<Chapter> {
    return await this.chapterModel.findByIdAndUpdate(id, chapter, {
      new: true,
    });
  }

  async delete(id: string): Promise<Chapter> {
    return await this.chapterModel.findByIdAndRemove({ _id: id });
  }
}
