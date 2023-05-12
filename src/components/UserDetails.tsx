import React from 'react';

interface UserDetailsProps {
  user: {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    bio: string;
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={user.avatar_url} alt={user.login} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.login}</div>
        <p className="text-gray-700 text-base">{user.bio}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver perfil
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
