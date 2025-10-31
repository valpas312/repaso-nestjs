import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SacService } from './sac.service';
import { CreateSacDto } from './dto/create-sac.dto';
import { UpdateSacDto } from './dto/update-sac.dto';

@Controller('sac')
export class SacController {
  constructor(private readonly sacService: SacService) {}

  @Get('/todoFrasle')
  findAll() {
    return this.sacService.findAllFrasle();
  }

  @Get('/todoMazfren')
  findAllMazfren() {
    return this.sacService.findAllMazfren();
  }

  @Get()
  findOne(@Query('codigo') term: string) {
    return this.sacService.search(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSacDto: UpdateSacDto) {
    return this.sacService.update(+id, updateSacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sacService.remove(+id);
  }
}
