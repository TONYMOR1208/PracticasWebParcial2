import { Router } from 'express';

import {IdiomaRoutes} from './idiomas/routes';
import { PalabraRoutes} from './palabras/routes';
import {RegistroRoutes } from './registros/routes';
import { GitHubRoutes } from './github/github.routes'; // Nueva ruta para GitHub


const router = Router();


router.use('/api/idiomas', IdiomaRoutes.routes );
router.use('/api/palabras', PalabraRoutes.routes );
router.use('/api/registros', RegistroRoutes.routes );
router.use('/github', GitHubRoutes.routes); // Ruta para GitHub


export const AppRoutes = { routes: router }; // Exporta las rutas de manera correcta
