import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import SignUpSignIn from './index'
import { userEvent } from '@storybook/testing-library'

describe('Testing SignUpSignIn open', () => {
  test('testing', () => {
    render(<SignUpSignIn />)
    const testingSignUpSignIn = screen.getByTestId('sign-in-sign-up')
    expect(testingSignUpSignIn).toBeDefined()

    const logIn = screen.getByText('Log in')
    userEvent.click(logIn)
    expect(logIn).toBeDefined()

    const enterEmail = screen.getByPlaceholderText('Enter your email address')
    fireEvent.change(enterEmail, { target: { value: 'test@gmail.com' } })

    const enterPassword = screen.getByPlaceholderText('Enter your password')
    fireEvent.change(enterPassword, { target: { value: 'Password@123' } })
  })
})
