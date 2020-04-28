import { Router } from 'express';
import appointmentsRouter from '../services/appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
