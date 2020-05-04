import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({ name, email, password });

      delete user.password;

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
