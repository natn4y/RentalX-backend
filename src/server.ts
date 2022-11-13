import express from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json';

import './database'

import { router } from './routes';

const app = express()
const port = 3333;

app.use(express.json());
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  console.log(`[SERVER RUNNING]: listening on port: ${port}`);
});