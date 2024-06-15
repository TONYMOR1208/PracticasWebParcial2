import { CreatepalabrasDto, UpdatepalabrasDto } from '../dtos';
import {PalabrasEntity } from '../entities/palabras.entity';


export abstract class   palabrasRepository {

  abstract create( createTodoDto: CreatepalabrasDto ): Promise<PalabrasEntity>;
  abstract getAll(): Promise<PalabrasEntity[]>;
  abstract findById( id: number ): Promise<PalabrasEntity>;
  abstract updateById( updateTodoDto: UpdatepalabrasDto ): Promise<PalabrasEntity>;
  abstract deleteById( id: number ): Promise<PalabrasEntity>;

}

