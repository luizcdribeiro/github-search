import { GithubRepository } from '../repositories/GithubRepository';

export class UserSearchService {
  private githubRepository: GithubRepository;

  constructor() {
    this.githubRepository = new GithubRepository();
  }

  async searchUsers(searchUser: string, maxResults: number, onSearch: (items: any[]) => void) {
    try {
      const items = await this.githubRepository.searchUsers(searchUser);
      const limitedItems = items.slice(0, Math.min(items.length, maxResults));
      onSearch(limitedItems);
    } catch (error) {
      throw new Error('Houve um erro na busca. Por favor, tente novamente');
    }
  }
}