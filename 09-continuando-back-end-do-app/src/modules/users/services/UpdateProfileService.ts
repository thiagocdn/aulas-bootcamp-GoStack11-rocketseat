import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/Users';

interface IRequestDTO {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
export default class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequestDTO): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    const checkEmail = await this.usersRepository.findByEmail(email);

    if (checkEmail && checkEmail.id !== user_id) {
      throw new AppError('This email is already used by another user.');
    }

    if (password && !old_password) {
      throw new AppError('You need to inform the current password.');
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Wrong current password.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    user.name = name;
    user.email = email;

    return this.usersRepository.save(user);
  }
}
