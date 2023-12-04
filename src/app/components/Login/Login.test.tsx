import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('renders a div with the text "Login"', () => {
    render(<Login />);
    const div = screen.getByText('Login');
    expect(div).toBeInTheDocument();
  });
});
