import { CreateregistrosDto, RegistrosDatasource, RegistroEntity, registrosRepository, UpdateregistrosDto } from '../../domain';

export class RegistroRepositoryImpl implements registrosRepository {

  constructor(
    private readonly datasource: RegistrosDatasource,
  ) { }

  create(createregistrosDto: CreateregistrosDto): Promise<RegistroEntity> {
    return this.datasource.create(createregistrosDto);
  }

  getAll(): Promise<RegistroEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<RegistroEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateregistrosDto: UpdateregistrosDto): Promise<RegistroEntity> {
    return this.datasource.updateById(updateregistrosDto);
  }

  deleteById(id: number): Promise<RegistroEntity> {
    return this.datasource.deleteById(id);
  }

}
