import { UserProps, UserRepositoryInterface, UserServiceInterface } from '../interfaces';

export class UserService implements UserServiceInterface {
  constructor(private userRepository: UserRepositoryInterface) {}

  async getUser(username: string): Promise<UserProps> {
    const user = await this.userRepository.getUserByUsername(username);
    return user;
  }
}