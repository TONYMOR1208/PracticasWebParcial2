import { prisma } from '../../data/postgres';
import { CreateidiomasDto, IdiomasDatasource, IdiomasEntity, UpdateidiomasDto } from '../../domain';


export class IdiomaDatasourceImpl implements IdiomasDatasource {

    async create(createidiomaDto: CreateidiomasDto): Promise<IdiomasEntity> {
      const idioma = await prisma.idioma.create({
        data: createidiomaDto!
      });
  
      return IdiomasEntity.fromObject(idioma);
    }
    
  async getAll(): Promise<IdiomasEntity[]> {
    const  idiomas = await prisma.idioma.findMany();
    return idiomas.map(idioma => IdiomasEntity.fromObject(idioma));
  }

  async findById(id: number): Promise<IdiomasEntity> {
    const idioma = await prisma.idioma.findFirst({
      where: { id }
    });

    if (!idioma) {
      throw new Error(`Idioma with id ${id} not found`);
    }

    return IdiomasEntity.fromObject(idioma);
  }


    async updateById(updateidiomaDto: UpdateidiomasDto): Promise<IdiomasEntity> {
      await this.findById(updateidiomaDto.id);
  
      const updatedIdioma = await prisma.idioma.update({
        where: { id: updateidiomaDto.id },
        data: updateidiomaDto.values
      });
  
      return IdiomasEntity.fromObject(updatedIdioma);
    }
  
    async deleteById(id: number): Promise<IdiomasEntity> {
      await this.findById(id);
  
      const deletedIdioma = await prisma.idioma.delete({
        where: { id }
      });
  
      return IdiomasEntity.fromObject(deletedIdioma);
    }
  
  }