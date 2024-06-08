// src/app.ts
import express from 'express';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('¡Aplicación De Anthony Joel Moreira!');
});

const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
