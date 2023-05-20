export interface User {
  id: number;
  login: string;
  avatar_url: string;
  site_admin: boolean;
  html_url?: string;
}

export interface UserDetailsProps {
  user: User;
}

export interface UserSearchProps {
  onUserClick: (user: User) => void;
  searchedUsers: User[];
  onSearch: (searchedUsers: User[]) => void;
}

export interface UsersProps {
  user: User;
  onUserClick: (user: User) => void;
}
