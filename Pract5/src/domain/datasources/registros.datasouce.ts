import { CreateregistrosDto, UpdateregistrosDto } from '../dtos';
import { RegistroEntity } from '../entities/registros.entity';

export abstract class RegistrosDatasource {

  abstract create(createTodoDto: CreateregistrosDto): Promise<RegistroEntity>;
  abstract getAll(): Promise<RegistroEntity[]>;
  abstract findById(id: number): Promise<RegistroEntity>;
  abstract updateById(updateTodoDto: UpdateregistrosDto): Promise<RegistroEntity>;
  abstract deleteById(id: number): Promise<RegistroEntity>;

}
