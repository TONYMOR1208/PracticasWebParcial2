import { Router } from 'express';

import {IdiomaRoutes} from './idiomas/routes';
import { PalabraRoutes} from './palabras/routes';
import {RegistroRoutes } from './registros/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/idiomas', IdiomaRoutes.routes );
    router.use('/api/palabras', PalabraRoutes.routes );
    router.use('/api/registros', RegistroRoutes.routes );

    return router;
  }


}

