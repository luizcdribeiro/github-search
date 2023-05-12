import React, { useRef, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  login: string;
  avatar_url: string;
  site_admin: boolean;
}

type UserSearchProps = {
  onUserClick: (user: any) => void;
};

const UserSearch: React.FC<UserSearchProps> = ({ onUserClick }) => {
  const [searchUser, setSearchUser] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const searchUser = searchInputRef.current?.value;
    setSearchUser(searchUser || '');
    searchInputRef.current?.blur();
    
    if (!searchUser) {
      setError('Digite um nome de usuário válido.');
      return;
    }
    setError('');
    handleSearch();
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchUser}`);
      const { items } = response.data;

      if (items.length > 10) {
        setUsers(items.slice(0, 10));
        setLoading(false);
      } else {
        setUsers(items);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleFormSubmit}>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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

          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Buscar</button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {loading && (
        <div className="flex justify-center items-center mt-28">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      
      <div className="flex align-middle container mx-auto flex-wrap gap-7">
        {users.map(user => (
          <div 
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer max-w-xs w-56"
            key={user.id}
            onClick={() => onUserClick(user)}
          > 
            <img className="rounded-t-lg" src={user.avatar_url} alt={user.login} />
          
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                {user.login}
              </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {user.site_admin ? 'Administrador' : 'Não é administrador'}
                </p>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
};

export default UserSearch;
