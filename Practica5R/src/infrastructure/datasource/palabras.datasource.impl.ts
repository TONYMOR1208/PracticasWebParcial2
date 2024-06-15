import { prisma } from '../../data/postgres';
import { CreatepalabrasDto, PalabrasDatasource, PalabrasEntity, UpdatepalabrasDto } from '../../domain';

export class PalabraDatasourceImpl implements PalabrasDatasource {

  async create(createpalabrasDto: CreatepalabrasDto): Promise<PalabrasEntity> {
    const palabra = await prisma.palabra.create({
      data: createpalabrasDto!
    });

    return PalabrasEntity.fromObject(palabra);
  }
  
  async getAll(): Promise<PalabrasEntity[]> {
    const palabras = await prisma.palabra.findMany();
    return palabras.map(palabra => PalabrasEntity.fromObject(palabra));
  }

  async findById(id: number): Promise<PalabrasEntity> {
    const palabra = await prisma.palabra.findFirst({
      where: { id }
    });

    if (!palabra) {
      throw new Error(`Palabra with id ${id} not found`);
    }

    return PalabrasEntity.fromObject(palabra);
  }

  async updateById(updatepalabrasDto: UpdatepalabrasDto): Promise<PalabrasEntity> {
    await this.findById(updatepalabrasDto.id);

    const updatedPalabra = await prisma.palabra.update({
      where: { id: updatepalabrasDto.id },
      data: updatepalabrasDto.values
    });

    return PalabrasEntity.fromObject(updatedPalabra);
  }

  async deleteById(id: number): Promise<PalabrasEntity> {
    await this.findById(id);

    const deletedPalabra = await prisma.palabra.delete({
      where: { id }
    });

    return PalabrasEntity.fromObject(deletedPalabra);
  }

}
