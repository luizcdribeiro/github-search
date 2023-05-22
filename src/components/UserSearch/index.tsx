import React, { useEffect, useRef, useState } from 'react';
import Users from '../Users';
import { UserSearchProps } from '../../interfaces';
import { UserSearchService } from '../../services/UserSearchService';

const UserSearch: React.FC<UserSearchProps> = ({ onUserClick, searchedUsers, onSearch }) => {
  const [searchUser, setSearchUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const userSearchService = useRef(new UserSearchService());
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const searchUserValue = searchInputRef.current?.value;
    setSearchUser(searchUserValue || '');
    searchInputRef.current?.blur();

    if (!searchUserValue) {
      setError('Digite um nome de usuário válido.');
      onSearch([]);
      return;
    }
    setError('');
    handleSearch();
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      await userSearchService.current.searchUsers(searchUser, 10, (items) => {
        onSearch(items);
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSearchUser('');
      setError('Houve um erro na busca. Por favor, tente novamente');
    }
  };

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  return (
    <div data-testid="user-search">
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite um nome de usuário"
            required
            value={searchUser}
            onChange={handleInputChange}
            ref={searchInputRef}
          />

          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            data-testid="search-button"
            disabled={loading}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </form>

      {error && <p className="flex items-center text-red-500 mt-2">{error}</p>}

      {loading ? (
        <div className="flex justify-center items-center mt-28">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white" data-testid="loading-spinner"></div>
        </div>
      ) : (
        <div className="flex align-middle container mx-auto flex-wrap gap-7">
          {searchedUsers.map((user) => (
            <Users
              user={user}
              onUserClick={onUserClick}
              key={user.id}
              data-testid={`user-${user.id}`}
             />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserSearch;

