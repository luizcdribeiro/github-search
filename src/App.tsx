import React, { useState } from 'react';
import UserSearch from './components/UserSearch';
import UserDetails from './components/UserDetails';
import { UserProps } from './interfaces';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [users, setUsers] = useState<UserProps[]>([]);

  const handleUserClick = (user: UserProps) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  const handleSearch = (searchedUsers: UserProps[]) => {
    setUsers(searchedUsers);
  };

  return (
    <div className="container mx-auto mt-8">
      {selectedUser ? (
        <>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleBackClick}
            data-testid="back-button"
            aria-label="Voltar"
          >
            Voltar
          </button>
          <UserDetails user={selectedUser} />
        </>
      ) : (
        <UserSearch onUserClick={handleUserClick} onSearch={handleSearch} searchedUsers={users} />
      )}
    </div>
  );
};

export default App;
