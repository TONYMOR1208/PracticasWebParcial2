import { CreatepalabrasDto, PalabrasDatasource, PalabrasEntity, palabrasRepository, UpdatepalabrasDto } from '../../domain';

export class PalabraRepositoryImpl implements palabrasRepository {

  constructor(
    private readonly datasource: PalabrasDatasource,
  ) { }

  create(createpalabrasDto: CreatepalabrasDto): Promise<PalabrasEntity> {
    return this.datasource.create(createpalabrasDto);
  }

  getAll(): Promise<PalabrasEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<PalabrasEntity> {
    return this.datasource.findById(id);
  }

  updateById(updatepalabrasDto: UpdatepalabrasDto): Promise<PalabrasEntity> {
    return this.datasource.updateById(updatepalabrasDto);
  }

  deleteById(id: number): Promise<PalabrasEntity> {
    return this.datasource.deleteById(id);
  }

}
