import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/Users';

interface IRequestDTO {
  user_id: string;
}

@injectable()
export default class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequestDTO): Promise<User[]> {
    const users = await this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    users.map(user => {
      const userWithoutPassword = user;
      delete userWithoutPassword.password;
      return true;
    });

    return users;
  }
}
