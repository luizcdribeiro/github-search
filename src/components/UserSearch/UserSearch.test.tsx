import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserSearch from '.';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('UserSearch Test Component', () => {
  test('should call onUserClick when form is submitted with a non-empty search term', async () => {
    
    const mockUser = {
      id: 123,
      login: 'john',
      avatar_url: 'https://example.com/avatar.jpg',
      site_admin: false
    };
    const mockOnUserClick = jest.fn();
    const mockSearch = jest.fn();

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: { items: [mockUser] } });
    render(<UserSearch onUserClick={mockOnUserClick} onSearch={mockSearch} searchedUsers={[mockUser]}  />);

    const input = screen.getByLabelText('Buscar');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(mockUser.login)).toBeInTheDocument();
    });
    expect(mockOnUserClick).not.toHaveBeenCalledWith(mockUser);
  });

  test('should display error message when form is submitted with an empty search term', () => {

    const mockOnUserClick = jest.fn();
    const mockSearch = jest.fn();

    render(<UserSearch onUserClick={mockOnUserClick} onSearch={mockSearch} searchedUsers={[]}  />);
    const button = screen.getByTestId('search-button');

    fireEvent.click(button);

    expect(screen.getByText('Digite um nome de usuário válido.')).toBeInTheDocument();
    expect(mockOnUserClick).not.toHaveBeenCalled();
  });

  test('should display loading spinner while searching', async () => {

    const mockUser = {
      id: 123,
      login: 'john',
      avatar_url: 'https://example.com/avatar.jpg',
      site_admin: false
    };
    const mockOnUserClick = jest.fn();
    const mockSearch = jest.fn();

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: { items: [mockUser] } });
    render(<UserSearch onUserClick={mockOnUserClick} onSearch={mockSearch} searchedUsers={[mockUser]}  />);
    const input = screen.getByLabelText('Buscar');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(mockUser.login)).toBeInTheDocument();
    });
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  });

  test('should display error message when search fails', async () => {

    const mockOnUserClick = jest.fn();
    const mockSearch = jest.fn();

    const axiosGetSpy = jest.spyOn(axios, 'get').mockRejectedValue(new Error('Houve um erro na busca. Por favor, tente novamente'));
    render(<UserSearch onUserClick={mockOnUserClick} onSearch={mockSearch} searchedUsers={[]} />);
    const input = screen.getByLabelText('Buscar');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Houve um erro na busca. Por favor, tente novamente')).toBeInTheDocument();
    });
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    expect(mockOnUserClick).not.toHaveBeenCalled();

    axiosGetSpy.mockRestore();
  });

});
