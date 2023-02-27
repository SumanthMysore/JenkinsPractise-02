import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import MobileVerification from './index'
import { userEvent } from '@storybook/testing-library'

describe('Should render the 2 Factor Authentication', () => {
  test('renders the 2 Factor Authentication', () => {
    render(<MobileVerification />)

    const mobileNumber = screen.getByTestId('2-factor-authentication')
    expect(mobileNumber).toBeInTheDocument()

    const phoneNumber = screen.getByDisplayValue('+44 020 7947 62020')
    fireEvent.change(phoneNumber)
    userEvent.click(phoneNumber)
    fireEvent.change(phoneNumber, {
      target: { value: '+91 789 1234 5760' },
    })

    const cancel = screen.getByText('Continue')
    fireEvent.click(cancel)

    const code = screen.getByPlaceholderText('Enter code here')
    fireEvent.change(code)
    userEvent.click(code)
    fireEvent.change(code, {
      target: { value: '123456' },
    })

    const resendCode = screen.getByText("I didn't receive a code")
    fireEvent.click(resendCode)

    const differentNumber = screen.getByText('Use different phone number')
    fireEvent.click(differentNumber)
  })
})
