import React from 'react'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import PasswordChange from './index'

describe('Testing PasswordChange open', () => {
  test('testing', () => {
    render(<PasswordChange />)
    const testingPasswordChange = screen.getByTestId('password-change')
    expect(testingPasswordChange).toBeDefined()

    const continueBtn = screen.getByText(/Continue/i)
    userEvent.click(continueBtn)
    expect(continueBtn).toBeDefined()
  })
})
