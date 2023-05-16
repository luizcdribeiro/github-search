import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserDetails from '.';

describe('UserDetails Component', () => {
  const user = {
    id: 1,
    login: 'john',
    avatar_url: 'https://example.com/avatar.jpg',
    html_url: 'https://example.com/profile',
    bio: 'Lorem ipsum dolor sit amet',
    site_admin: false,
  };

  it('renders user details correctly', () => {
    render(<UserDetails user={user} />);
    
    const avatar = screen.getByRole('img', { name: /john/i });
    const username = screen.getByText('john');
    const userProfileLink = screen.getByRole('link', { name: /ver perfil/i });
    
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatar).toHaveAttribute('alt', 'john');
    
    expect(username).toBeInTheDocument();
    
    expect(userProfileLink).toBeInTheDocument();
    expect(userProfileLink).toHaveAttribute('href', 'https://example.com/profile');
    expect(userProfileLink).toHaveAttribute('target', '_blank');
    expect(userProfileLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
