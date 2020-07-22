import { User } from './types';
import { asyncTimer } from '../lib/asyncTimer';

const registeredUser = {
  username: 'admin',
  password: 'admin',
  avatar: 'https://i.pravatar.cc/100',
};

export async function apiLogin(username: string, password: string): Promise<User> {
  await asyncTimer(500);

  if (username !== registeredUser.username || password !== registeredUser.password) {
    throw new Error('Неверный логин или пароль');
  }

  return registeredUser;
}
