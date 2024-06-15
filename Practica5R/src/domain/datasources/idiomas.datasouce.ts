import { CreateidiomasDto, UpdateidiomasDto } from '../dtos';
import { IdiomasEntity } from '../entities/idiomas.entity';



export abstract class IdiomasDatasource {

  abstract create( createTodoDto:CreateidiomasDto ): Promise<IdiomasEntity >;
  abstract getAll(): Promise<IdiomasEntity []>;
  abstract findById( id: number ): Promise<IdiomasEntity >;
  abstract updateById( updateTodoDto: UpdateidiomasDto): Promise<IdiomasEntity >;
  abstract deleteById( id: number ): Promise<IdiomasEntity >;

}