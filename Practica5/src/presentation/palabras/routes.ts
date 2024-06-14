import { Router } from 'express';
import { PalabrasController } from './controller';
import { PalabraDatasourceImpl } from '../../infrastructure/datasource/palabras.datasource.impl';
import { PalabraRepositoryImpl } from '../../infrastructure/repositories/palabras.repository.impl';

export class PalabraRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new PalabraDatasourceImpl();
    const palabraRepository = new PalabraRepositoryImpl(datasource);
    const palabraController = new PalabrasController(palabraRepository);

    router.get('/', palabraController.getAllPalabras);
    router.get('/:id', palabraController.getPalabraById);

    router.post('/', palabraController.createPalabra);
    router.put('/:id', palabraController.updatePalabra);
    router.delete('/:id', palabraController.deletePalabra);

    return router;
  }

}
