import { CreateidiomasDto, IdiomasDatasource, IdiomasEntity, UpdateidiomasDto,idiomasRepository } from '../../domain';

export class IdiomaRepositoryImpl implements idiomasRepository
 {

  constructor(
    private readonly datasource: IdiomasDatasource,
  ) { }

  create(createidiomasDto: CreateidiomasDto): Promise<IdiomasEntity> {
    return this.datasource.create(createidiomasDto);
  }

  getAll(): Promise<IdiomasEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<IdiomasEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateidiomasDto: UpdateidiomasDto): Promise<IdiomasEntity> {
    return this.datasource.updateById(updateidiomasDto);
  }

  deleteById(id: number): Promise<IdiomasEntity> {
    return this.datasource.deleteById(id);
  }

}
