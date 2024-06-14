import { Request, Response } from 'express';
import { CreatepalabrasDto, UpdatepalabrasDto } from '../../domain';
import { palabrasRepository } from '../../domain/repositories/palabras.repository';

export class PalabrasController {

  constructor(private readonly palabrasRepository: palabrasRepository) { }

  // Obtener todas las palabras
  public getAllPalabras = async (req: Request, res: Response) => {
    try {
      const palabras = await this.palabrasRepository.getAll();
      return res.status(200).json(palabras);
    } catch (error: any) {
      console.error('Error in getAllPalabras:', error);
      return res.status(500).json({ message: 'Error al obtener las palabras', error: error.message });
    }
  };

  // Obtener una palabra por su ID
  public getPalabraById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const palabra = await this.palabrasRepository.findById(id);
      if (!palabra) {
        return res.status(404).json({ message: `Palabra con id ${id} no encontrada` });
      }
      return res.json(palabra);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener la palabra', error: error.message });
    }
  };

  // Crear una nueva palabra
  public createPalabra = async (req: Request, res: Response) => {
    try {
      const createPalabraDto: CreatepalabrasDto = req.body;
      const palabra = await this.palabrasRepository.create(createPalabraDto);
      return res.status(201).json(palabra);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear la palabra', error: error.message });
    }
  };

  // Actualizar una palabra existente
  public updatePalabra = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const updatePalabraDto: UpdatepalabrasDto = { id, ...req.body };
      const palabra = await this.palabrasRepository.updateById(updatePalabraDto);
      return res.json(palabra);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar la palabra', error: error.message });
    }
  };

  // Eliminar una palabra
  public deletePalabra = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.palabrasRepository.deleteById(id);
      return res.json({ message: 'Palabra eliminada correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar la palabra', error: error.message });
    }
  };

}
