import axios, { AxiosError } from 'axios';

export class GithubRepository {

  private readonly BASE_URL = process.env.REACT_APP_BASE_URL

  async searchUsers(searchUser: string) {
    try {
      const response = await axios.get(`${this.BASE_URL}/search/users?q=${searchUser}`);
      return response.data.items;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const { status } = axiosError.response;
          if (status === 404) {
            throw new Error('Usuários não encontrados.');
          } else {
            throw new Error('Houve um erro na busca. Por favor, tente novamente.');
          }
        }
      }
      throw new Error('Houve um erro na busca. Por favor, tente novamente.');
    }
  }
}