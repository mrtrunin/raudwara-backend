import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { Chapter } from './interfaces/chapter.interface';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Get()
  findAll(): Promise<Chapter[]> {
    return this.chaptersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Chapter> {
    return this.chaptersService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createChapterDto: CreateChapterDto): Promise<Chapter> {
    return this.chaptersService.create(createChapterDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(
    @Body() updateChapterDto: CreateChapterDto,
    @Param('id') id,
  ): Promise<Chapter> {
    return this.chaptersService.update(id, updateChapterDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id): Promise<Chapter> {
    return this.chaptersService.delete(id);
  }
}
