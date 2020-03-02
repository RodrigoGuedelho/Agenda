import { Router } from 'express';
import AgendaController from './app/controllers/AgendaController'
import Agenda from './app/models/Agenda';

const routes = new Router();

routes.post('/agenda/store', AgendaController.store)
routes.get('/agenda/delete/:id', AgendaController.delete)
routes.post('/agenda/update', AgendaController.update)
routes.get('/agenda/find/:id', AgendaController.findOne)
routes.post('/agenda/find', AgendaController.find)

export default routes