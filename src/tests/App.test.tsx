import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

describe('App Component', () => {
  test('renders UserSearch when no user is selected', () => {
    render(<App />);
    const userSearchElement = screen.getByTestId('user-search');
    expect(userSearchElement).toBeInTheDocument();
  });
  
});
