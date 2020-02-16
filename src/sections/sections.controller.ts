import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './interfaces/section.interface';
import { SectionsService } from './sections.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Get()
  findAll(): Promise<Section[]> {
    return this.sectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Section> {
    return this.sectionsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createSectionDto: CreateSectionDto): Promise<Section> {
    return this.sectionsService.create(createSectionDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<Section> {
    const result = await this.sectionsService.uploadImage(file);
    const createSectionDto: CreateSectionDto = {
      type: 'image',
      url: result.toString(),
    };
    return await this.sectionsService.create(createSectionDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(
    @Body() updateSectionDto: CreateSectionDto,
    @Param('id') id,
  ): Promise<Section> {
    return this.sectionsService.update(id, updateSectionDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id): Promise<Section> {
    return this.sectionsService.delete(id);
  }
}
