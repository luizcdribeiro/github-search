import axios from 'axios';
import { GithubRepository } from './GithubRepository';

jest.mock('axios');

describe('GithubRepository', () => {
  let repository: GithubRepository;

  beforeEach(() => {
    repository = new GithubRepository();
  });

  it('should search users successfully', async () => {
    const searchUser = 'john';

    const responseMock = {
      data: {
        items: [{ id: 1, login: 'john_doe' }, { id: 2, login: 'john_smith' }]
      }
    };

    axios.get = jest.fn().mockResolvedValue(responseMock);

    const result = await repository.searchUsers(searchUser);

    expect(result).toEqual(responseMock.data.items);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`/search/users?q=${searchUser}`));
  });

  

  it('should throw a generic error when there is an error without response', async () => {
    const searchUser = 'john';

    const errorMock = new Error('Something went wrong');

    axios.get = jest.fn().mockRejectedValue(errorMock);

    await expect(repository.searchUsers(searchUser)).rejects.toThrow('Houve um erro na busca. Por favor, tente novamente.');
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`/search/users?q=${searchUser}`));
  });
});
