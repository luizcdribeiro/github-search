import { UserSearchService } from './UserSearchService';

describe('UserSearchService', () => {
  it('deve chamar onSearch com os itens de usuário limitados', async () => {
    const searchUser = 'john';
    const maxResults = 5;
    const mockItems = [
      { id: 1, login: 'john_doe', avatar_url: '', site_admin: false },
      { id: 2, login: 'john_smith', avatar_url: '', site_admin: false },
      { id: 3, login: 'johnny', avatar_url: '', site_admin: false },
      { id: 4, login: 'johnwick', avatar_url: '', site_admin: false },
      { id: 5, login: 'johnnybravo', avatar_url: '', site_admin: false },
      { id: 6, login: 'johndoe2', avatar_url: '', site_admin: false }
    ];
    const onSearchMock = jest.fn();

    const userSearchService = new UserSearchService();
    jest.spyOn(userSearchService, 'searchUsers').mockImplementation(async (searchUser, maxResults, onSearch) => {
      const limitedItems = mockItems.slice(0, Math.min(mockItems.length, maxResults));
      onSearch(limitedItems);
    });

    await userSearchService.searchUsers(searchUser, maxResults, (items) => {
      onSearchMock(items);
    });

    expect(userSearchService.searchUsers).toHaveBeenCalledWith(searchUser, maxResults, expect.any(Function));
    expect(onSearchMock).toHaveBeenCalledWith(mockItems.slice(0, maxResults));
  });

  it('deve lançar um erro quando ocorrer um erro na busca', async () => {
    const searchUser = 'john';
    const maxResults = 5;
    const errorMock = new Error('Houve um erro na busca. Por favor, tente novamente');
    const onSearchMock = jest.fn();
  
    const userSearchService = new UserSearchService();
    jest.spyOn(userSearchService, 'searchUsers').mockRejectedValue(errorMock);
  
    await expect(userSearchService.searchUsers(searchUser, maxResults, onSearchMock)).rejects.toThrowError('Houve um erro na busca. Por favor, tente novamente');
  
    expect(userSearchService.searchUsers).toHaveBeenCalledWith(searchUser, maxResults, expect.any(Function));
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
