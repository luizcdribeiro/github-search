import React from 'react';
import { UserProps } from '../../interfaces';
interface UsersProps {
  user: UserProps;
  onUserClick: (user: UserProps) => void;
  testId?: string;
}

const Users: React.FC<UsersProps> = ({ user, onUserClick, testId }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-xs sm:w-64" data-testid={`user-${user.id}`} >
      <img className="rounded-t-lg" src={user.avatar_url} alt={user.login} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {user.login}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.site_admin ? 'Administrador' : 'Não é administrador'}
        </p>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          data-testid="profile-button"
          onClick={() => onUserClick(user)}
        >
          Ver perfil
        </button>
      </div>
    </div>
  );
};

export default Users;
