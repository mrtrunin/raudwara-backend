import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './interfaces/section.interface';
import { SectionsService } from './sections.service';
import { AuthGuard } from '@nestjs/passport';

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
