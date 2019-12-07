import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterSchema } from './schemas/chapter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chapter', schema: ChapterSchema }]),
  ],
  controllers: [ChaptersController],
  providers: [ChaptersService],
})
export class ChaptersModule {}
