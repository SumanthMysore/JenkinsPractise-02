import * as React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import AccountSelection from './index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Should render the Account Selection', () => {
  test('renders the Account Selection', () => {
    render(
      <Router>
        <AccountSelection />
      </Router>
    )
    const accountSelection = screen.getByTestId('account-selection')
    expect(accountSelection).toBeInTheDocument()

    const selectAccount = screen.getByText('Business account')
    fireEvent.click(selectAccount)
    const test = screen.getByTestId('dropdown-id')
    const input = within(test).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'A' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })

    const selectCountry = screen.getByText('Continue')
    fireEvent.click(selectCountry)

    const mobileNumber = screen.getByText('Continue')
    fireEvent.click(mobileNumber)

    const enterOtp = screen.getByPlaceholderText('Enter code here')
    fireEvent.change(enterOtp, { target: { value: 123456 } })

    const otp = screen.getByText('Submit')
    fireEvent.click(otp)

    const passwordScreenreDirect = screen.getByAltText('Arrow')
    fireEvent.click(passwordScreenreDirect)

    const mobileScreenreDirect = screen.getByAltText('Arrow')
    fireEvent.click(mobileScreenreDirect)

    const selectCountryScreenreDirect = screen.getByAltText('Arrow')
    fireEvent.click(selectCountryScreenreDirect)

    const signUpScreenreDirect = screen.getByAltText('Arrow')
    fireEvent.click(signUpScreenreDirect)
  })
})
