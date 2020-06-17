import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');

    fireEvent.change(emailField, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    const buttonElement = getByText('Entrar');

    fireEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard')
  });
});
