import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '../models/Users';
import uploadConfig from '../config/upload';
import AppError from '../erros/AppError';

interface RequestDTO {
  user_id: string;
  avatarFilename: string;
}

export default class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can update avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}
