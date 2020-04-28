import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/Users';
import AppError from '../erros/AppError';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const checkSameEmail = await usersRepository.findOne({
      where: { email },
    });

    if (checkSameEmail) {
      throw new AppError('This e-mail is already registered.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
