import { Router } from 'express';
import { IdiomasController } from './controller';
import { IdiomaDatasourceImpl } from '../../infrastructure/datasource/idiomas.datasource.impl';
import { IdiomaRepositoryImpl } from '../../infrastructure/repositories/idiomas.repository.impl';

export class IdiomaRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new IdiomaDatasourceImpl();
    const idiomaRepository = new IdiomaRepositoryImpl(datasource);
    const idiomaController = new IdiomasController(idiomaRepository);

    router.get('/', idiomaController.getAllIdiomas);
    router.get('/:id', idiomaController.getIdiomaById);

    router.post('/', idiomaController.createIdioma);
    router.put('/:id', idiomaController.updateIdioma);
    router.delete('/:id', idiomaController.deleteIdioma);

    return router;
  }

}
