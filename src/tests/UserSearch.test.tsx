import { render, screen, fireEvent } from '@testing-library/react';
import UserSearch from '../components/UserSearch';

describe('UserSearch Test component', () => {
  test('should call onUserClick when form is submitted with a non-empty search term', () => {
    const mockUser = { id: 123, name: 'John Doe' };
    const mockOnUserClick = jest.fn();

    render(<UserSearch onUserClick={mockOnUserClick} />);

    const input = screen.getByPlaceholderText('Digite um nome de usuário');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    expect(mockOnUserClick).toHaveBeenCalledWith(mockUser);
  });

  test('should not call onUserClick when form is submitted with an empty search term', () => {
    const mockOnUserClick = jest.fn();

    render(<UserSearch onUserClick={mockOnUserClick} />);

    const button = screen.getByText('Search');

    fireEvent.click(button);

    expect(mockOnUserClick).not.toHaveBeenCalled();
  });
});
