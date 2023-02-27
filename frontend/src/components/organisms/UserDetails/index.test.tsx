import React from 'react'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import UserDetails from '.'

describe('Testing UserDetails open', () => {
  test('testing', () => {
    render(<UserDetails />)
    const testingUserDetails = screen.getByTestId(
      'user-details'
    )
    expect(testingUserDetails).toBeDefined()

    const continueBtn = screen.getByText(/Continue/i)
    userEvent.click(continueBtn)
    expect(continueBtn).toBeDefined()
  })
})
