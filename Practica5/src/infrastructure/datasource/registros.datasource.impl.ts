import { prisma } from '../../data/postgres';
import { CreateregistrosDto, RegistrosDatasource, RegistroEntity, UpdateregistrosDto } from '../../domain';

export class RegistrosDatasourceImpl implements RegistrosDatasource {

  async create(createregistrosDto: CreateregistrosDto): Promise<RegistroEntity> {
    const registro = await prisma.registro.create({
      data: createregistrosDto!
    });

    return RegistroEntity.fromObject(registro);
  }
  
  async getAll(): Promise<RegistroEntity[]> {
    const registros = await prisma.registro.findMany();
    return registros.map(registro => RegistroEntity.fromObject(registro));
  }

  async findById(id: number): Promise<RegistroEntity> {
    const registro = await prisma.registro.findFirst({
      where: { id }
    });

    if (!registro) {
      throw new Error(`Registro with id ${id} not found`);
    }

    return RegistroEntity.fromObject(registro);
  }

  async updateById(updateregistrosDto: UpdateregistrosDto): Promise<RegistroEntity> {
    await this.findById(updateregistrosDto.id);

    const updatedRegistro = await prisma.registro.update({
      where: { id: updateregistrosDto.id },
      data: updateregistrosDto.values
    });

    return RegistroEntity.fromObject(updatedRegistro);
  }

  async deleteById(id: number): Promise<RegistroEntity> {
    await this.findById(id);

    const deletedRegistro = await prisma.registro.delete({
      where: { id }
    });

    return RegistroEntity.fromObject(deletedRegistro);
  }

}
