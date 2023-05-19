export interface UserProps {
  id: number;
  login: string;
  avatar_url: string;
  site_admin: boolean;
  html_url?: string;
}
export interface UserRepositoryInterface {
  getUserByUsername(username: string): Promise<UserProps>;
}
export interface UserServiceInterface {
  getUser(username: string): Promise<UserProps>;
}