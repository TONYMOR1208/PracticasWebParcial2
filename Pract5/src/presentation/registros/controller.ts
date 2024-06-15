import { Request, Response } from 'express';
import { CreateregistrosDto, UpdateregistrosDto } from '../../domain';
import { registrosRepository } from '../../domain/repositories/registros.repository';

export class RegistrosController {

  constructor(private readonly registrosRepository: registrosRepository) { }

  // Obtener todos los registros
  public getAllRegistros = async (req: Request, res: Response) => {
    try {
      const registros = await this.registrosRepository.getAll();
      return res.status(200).json(registros);
    } catch (error: any) {
      console.error('Error in getAllRegistros:', error);
      return res.status(500).json({ message: 'Error al obtener los registros', error: error.message });
    }
  };

  // Obtener un registro por su ID
  public getRegistroById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const registro = await this.registrosRepository.findById(id);
      if (!registro) {
        return res.status(404).json({ message: `Registro con id ${id} no encontrado` });
      }
      return res.json(registro);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el registro', error: error.message });
    }
  };

  // Crear un nuevo registro
  public createRegistro = async (req: Request, res: Response) => {
    try {
      const createRegistroDto: CreateregistrosDto = req.body;
      const registro = await this.registrosRepository.create(createRegistroDto);
      return res.status(201).json(registro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el registro', error: error.message });
    }
  };

  // Actualizar un registro existente
  public updateRegistro = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const updateRegistroDto: UpdateregistrosDto = { id, ...req.body };
      const registro = await this.registrosRepository.updateById(updateRegistroDto);
      return res.json(registro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el registro', error: error.message });
    }
  };

  // Eliminar un registro
  public deleteRegistro = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.registrosRepository.deleteById(id);
      return res.json({ message: 'Registro eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el registro', error: error.message });
    }
  };

}
