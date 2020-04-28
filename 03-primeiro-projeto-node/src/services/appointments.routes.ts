import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsReposiroty from '../repositories/AppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

const appointmentsRouter = Router();

const appointmentRepository = new AppointmentsReposiroty();

// Rota GET
appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentRepository.all();
  return response.json(appointments);
});

// Rota POST
appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentRepository,
    );
    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

export default appointmentsRouter;
