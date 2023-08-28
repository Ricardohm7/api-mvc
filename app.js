import express, { json } from 'express';
import { moviesRouter } from './routes/movies.js';
import { corsMiddleware } from './middlewares/cors.js';

//LER UN JSON EN ESMODULE
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

//LEER UN JSON EN ESMODULE recomendado por ahora
//const movies = readJSON('./movies.json')

const app = express();
app.use(json());
app.use(corsMiddleware())
app.disable('x-powered-by');

app.use('/movies', moviesRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
