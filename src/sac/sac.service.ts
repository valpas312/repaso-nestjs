import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSacDto } from './dto/create-sac.dto';
import { UpdateSacDto } from './dto/update-sac.dto';
import { FraslePrismaService } from 'src/prisma/frasle/frasle.service';

@Injectable()
export class SacService {

  constructor(
          private prisma: FraslePrismaService,
      ) { }

  create(createSacDto: CreateSacDto) {
    return 'This action adds a new sac';
  }

  findAll(limit = 100) {
    return this.prisma.frasle.findMany({
      take: limit,
      orderBy: { codigo: 'asc' },
    });
  }

  async findOne(codigo: string){
          const pastilla = await this.prisma.frasle.findUnique({
              where: { codigo: codigo },
          });
          if (!pastilla) {
              throw new NotFoundException(`Pastilla with id ${codigo} not found`);
          }
          console.log(pastilla);
          return pastilla;
      };

  update(id: number, updateSacDto: UpdateSacDto) {
    return `This action updates a #${id} sac`;
  }

  remove(id: number) {
    return `This action removes a #${id} sac`;
  }
}
