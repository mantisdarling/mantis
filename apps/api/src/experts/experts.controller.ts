import { Controller, Get, Query, Param } from '@nestjs/common';
import { ExpertsService } from './experts.service';

@Controller('experts')
export class ExpertsController {
  constructor(private readonly expertsService: ExpertsService) {}

  @Get()
  findAll(
    @Query('skill') skill?: string,
    @Query('min_rating') minRating?: number,
  ) {
    return this.expertsService.findAll(skill, minRating);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expertsService.findOne(id);
  }
}
