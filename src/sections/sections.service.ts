import { Injectable } from '@nestjs/common';
import { Section } from './interfaces/section.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel('Section') private readonly sectionModel: Model<Section>,
  ) {}

  async findAll(): Promise<Section[]> {
    return await this.sectionModel.find();
  }

  async findOne(id: string): Promise<Section> {
    return await this.sectionModel.findOne({ _id: id });
  }

  async create(section: Section): Promise<Section> {
    const newSection = new this.sectionModel(section);
    return await newSection.save();
  }

  async delete(id: string): Promise<Section> {
    return await this.sectionModel.findByIdAndRemove({ _id: id });
  }

  async update(id: string, section: Section): Promise<Section> {
    return await this.sectionModel.findByIdAndUpdate(id, section, {
      new: true,
    });
  }
}
