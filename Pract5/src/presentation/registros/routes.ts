import { Router } from 'express';
import { RegistrosController } from './controller';
import { RegistrosDatasourceImpl } from '../../infrastructure/datasource/registros.datasource.impl';
import { RegistroRepositoryImpl } from '../../infrastructure/repositories/registros.repository.impl';

export class RegistroRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new RegistrosDatasourceImpl ();
    const registroRepository = new RegistroRepositoryImpl(datasource);
    const registroController = new RegistrosController(registroRepository);

    router.get('/', registroController.getAllRegistros);
    router.get('/:id', registroController.getRegistroById);

    router.post('/', registroController.createRegistro);
    router.put('/:id', registroController.updateRegistro);
    router.delete('/:id', registroController.deleteRegistro);

    return router;
  }

}
