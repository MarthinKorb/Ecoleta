import express, { request, response } from 'express';
//conexão com o database

import PointsController from '../src/controllers/PointsController';
import ItemsController from '../src/controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);



export default routes;