import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateidiomasDto,UpdateidiomasDto} from '../../domain/dtos';
import { idiomasRepository } from '../../domain';


export class IdiomasController {

  constructor(private readonly idiomasRepository: idiomasRepository) { }

  // Obtener todos los idiomas
  public getAllIdiomas = async (req: Request, res: Response) => {
    try {
      const idiomas = await this.idiomasRepository.getAll();
      return res.status(200).json(idiomas);
    } catch (error: any) {
      console.error('Error in getAllIdiomas:', error);
      return res.status(500).json({ message: 'Error al obtener los idiomas', error: error.message });
    }
  };

  // Obtener un idioma por su ID
  public getIdiomaById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const idioma = await this.idiomasRepository.findById(id);
      if (!idioma) {
        return res.status(404).json({ message: `Idioma con id ${id} no encontrado` });
      }
      return res.json(idioma);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el idioma', error: error.message });
    }
  };

  // Crear un nuevo idioma
  public createIdioma = async (req: Request, res: Response) => {
    try {
      const createIdiomaDto: CreateidiomasDto = req.body;
      const idioma = await this.idiomasRepository.create(createIdiomaDto);
      return res.status(201).json(idioma);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el idioma', error: error.message });
    }
  };

  // Actualizar un idioma existente
  public updateIdioma = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const updateIdiomaDto: UpdateidiomasDto = { id, ...req.body };
      const idioma = await this.idiomasRepository.updateById(updateIdiomaDto);
      return res.json(idioma);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el idioma', error: error.message });
    }
  };

  // Eliminar un idioma
  public deleteIdioma = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.idiomasRepository.deleteById(id);
      return res.json({ message: 'Idioma eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el idioma', error: error.message });
    }
  };

}
