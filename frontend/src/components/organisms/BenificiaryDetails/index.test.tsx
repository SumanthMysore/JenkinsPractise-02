import React from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import BenificiaryDetails from './index'

describe('Testing BenificiaryDetails open', () => {
  test('testing', () => {
    render(<BenificiaryDetails />)
    const testingBenificiaryDetails = screen.getByTestId('benificiary-details')
    expect(testingBenificiaryDetails).toBeDefined()

    const continueBtn = screen.getByText(/Continue/i)
    userEvent.click(continueBtn)
    expect(continueBtn).toBeDefined()
  })
})
