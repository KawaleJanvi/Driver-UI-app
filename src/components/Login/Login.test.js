import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('<Login />', () => {
  test('it should mount', () => {
    render(<Login />);

    const login = screen.getByTestId('Login');

    expect(login).toBeInTheDocument();
  });

  test("renders Login form and submits", () => {
  render(<Login />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "password" } });
  fireEvent.click(screen.getByRole("button", { name: /Login/i }));
});
});