import { fireEvent, render, screen } from '@testing-library/react'
import BusinessSelection from './index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Should render the Account Selection', () => {
  test('renders the Account Selection', () => {
    render(
      <Router>
        <BusinessSelection />
      </Router>
    )

    const accountSelection = screen.getByTestId('business-selection')
    expect(accountSelection).toBeInTheDocument()

    const selectBusiness = screen.getByPlaceholderText('Select your business')
    fireEvent.click(selectBusiness)

    const input = screen.getByRole('combobox')
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'Z' } })
    fireEvent.keyDown(selectBusiness, { key: 'ArrowDown' })
    fireEvent.keyDown(selectBusiness, { key: 'Enter' })

    const confirm = screen.getByText('Confirm')
    fireEvent.click(confirm)

    const tradeConfirm = screen.getByText('Confirm')
    fireEvent.click(tradeConfirm)

    const activityConfirm = screen.getByText('Continue')
    fireEvent.click(activityConfirm)

    const userDetailsConfirm = screen.getByText('Continue')
    fireEvent.click(userDetailsConfirm)
  })
})
