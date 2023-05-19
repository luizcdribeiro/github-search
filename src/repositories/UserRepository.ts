import axios from 'axios';
import { UserProps, UserRepositoryInterface } from '../interfaces';

export class UserRepository implements UserRepositoryInterface {
  async getUserByUsername(username: string): Promise<UserProps> {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }
}