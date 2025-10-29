import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SacService } from './sac.service';
import { CreateSacDto } from './dto/create-sac.dto';
import { UpdateSacDto } from './dto/update-sac.dto';

@Controller('sac')
export class SacController {
  constructor(private readonly sacService: SacService) {}

  @Post()
  create(@Body() createSacDto: CreateSacDto) {
    return this.sacService.create(createSacDto);
  }

  @Get()
  findAll() {
    return this.sacService.findAll();
  }

  @Get('')
  findOne(@Query('codigo') codigo: string) {
    return this.sacService.findOne(codigo);
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
