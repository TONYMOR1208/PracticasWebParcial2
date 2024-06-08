
import express from 'express';
import idiomaRoutes from './idiomaRoutes';
import palabraRoutes from './palabraRoutes';
import registroRoutes from './registroRoutes';
import maestraRoutes from './maestraRoutes'



const router = express.Router();

router.use('/idiomas', idiomaRoutes);
router.use('/palabras', palabraRoutes);
router.use('/registros', registroRoutes);
router.use('/maestra', maestraRoutes);

export default router;
