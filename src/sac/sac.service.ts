import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSacDto } from './dto/update-sac.dto';
import { FraslePrismaService } from 'src/prisma/frasle/frasle.service';
import { MazfrenPrismaService } from 'src/prisma/mazfren/mazfren.service';

@Injectable()
export class SacService {

  constructor(
    private fraslePrisma: FraslePrismaService,
    private mazfrenPrisma: MazfrenPrismaService,
  ) { }



  async findAllFrasle() {
    return this.fraslePrisma.frasle.findMany();
  }

  async findAllMazfren() {
    return this.mazfrenPrisma.mazfren.findMany();
  }

  async findOne(codigo: string) {
    const pastilla = await this.fraslePrisma.frasle.findUnique({
      where: { codigo: codigo },
    });
    if (!pastilla) {
      throw new NotFoundException(`Pastilla with codigo ${codigo} not found`);
    }
    console.log(pastilla);
    return pastilla;
  };

  async search(term: string) {
    const q = (term || '').trim();

    if (!q) {
      throw new BadRequestException('Debe ingresar un término de búsqueda.');
    }

    // 🔹 Promesas en paralelo (más rápido)
    const [frasleResults, mazfrenResults] = await Promise.all([
      this.fraslePrisma.frasle.findMany({
        where: {
          OR: [
            { codigo: { contains: q, mode: 'insensitive' } },
            { descripcion: { contains: q, mode: 'insensitive' } },
          ],
        },
        take: 50,
      }),
      this.mazfrenPrisma.mazfren.findMany({
        where: {
          OR: [
            { codigo: { contains: q, mode: 'insensitive' } },
            { descripcion: { contains: q, mode: 'insensitive' } },
          ],
        },
        take: 50,
      }),
    ]);

    // 🔸 Agregamos una etiqueta para saber de dónde viene
    const frasleTagged = frasleResults.map((p) => ({ ...p, origen: 'frasle' }));
    const mazfrenTagged = mazfrenResults.map((p) => ({ ...p, origen: 'mazfren' }));

    // 🔹 Combinamos los resultados
    const combined = [...frasleTagged, ...mazfrenTagged];

    console.log(combined)

    if (combined.length === 0) {
      throw new NotFoundException(`No se encontró ninguna pastilla que coincida con '${term}'`);
    }

    // 🔹 Ordenar alfabéticamente por código
    combined.sort((a, b) => a.codigo.localeCompare(b.codigo));

    return combined;
  }

  update(id: number, updateSacDto: UpdateSacDto) {
    return `This action updates a #${id} sac`;
  }

  remove(id: number) {
    return `This action removes a #${id} sac`;
  }
}
