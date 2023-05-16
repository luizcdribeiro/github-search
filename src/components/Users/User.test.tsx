import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from '.';

const user = {
  id: 1,
  login: 'johndoe',
  avatar_url: 'https://example.com/avatar.jpg',
  site_admin: false,
};

describe('User component', () => {
  test('renders user information correctly', () => {
    render(<User user={user} onUserClick={() => {}} />);

    expect(screen.getByAltText(user.login)).toBeInTheDocument();
    expect(screen.getByText(user.login)).toBeInTheDocument();
    expect(screen.getByText('Não é administrador')).toBeInTheDocument();
  });

  test('calls onUserClick when "Ver perfil" button is clicked', () => {
    const onUserClick = jest.fn();
    render(<User user={user} onUserClick={onUserClick} />);
    const profileButton = screen.getByTestId('profile-button');

    fireEvent.click(profileButton);

    expect(onUserClick).toHaveBeenCalledWith(user);
  });
});
