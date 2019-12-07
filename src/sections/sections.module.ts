import { Module } from '@nestjs/common';
import { SectionsController } from './sections.controller';
import { SectionsService } from './sections.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionSchema } from './schemas/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Section', schema: SectionSchema }]),
  ],
  controllers: [SectionsController],
  providers: [SectionsService],
})
export class SectionsModule {}
