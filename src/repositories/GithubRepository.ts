import axios from 'axios';

export class GithubRepository {
  async searchUsers(searchUser: string) {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchUser}`);
      return response.data.items;
    } catch (error) {
      throw new Error('Houve um erro na busca. Por favor, tente novamente');
    }
  }
}