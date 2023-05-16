export interface UserProps {
  id: number;
  login: string;
  avatar_url: string;
  site_admin: boolean;
  html_url?: string;
}