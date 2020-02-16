import { Injectable } from '@nestjs/common';
import { Section } from './interfaces/section.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { format } from 'util';
import { Storage } from '@google-cloud/storage';

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

  uploadImage = (file: any) =>
    new Promise((resolve, reject) => {
      const storage = new Storage();
      const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
      const { originalname, buffer } = file;

      // TODO: Validate that this is just an image

      const blob = bucket.file(originalname.replace(/ /g, '_'));
      const blobStream = blob.createWriteStream({
        resumable: false,
      });
      blobStream
        .on('finish', () => {
          const publicUrl: string = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
          );
          resolve(publicUrl);
        })
        .on('error', () => {
          reject(`Unable to upload image, something went wrong`);
        })
        .end(buffer);
    });
}
