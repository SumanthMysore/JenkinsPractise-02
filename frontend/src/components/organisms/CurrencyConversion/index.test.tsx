import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CurrencyConversion from './index'

describe('Should render the Currency Conversion', () => {
  test('renders the Currency Conversion', () => {
    render(<CurrencyConversion />)

    const currencyConversion = screen.getByTestId('currency-conversion')
    expect(currencyConversion).toBeInTheDocument()

    const selectSendCountry = screen.getAllByText('GBP')[0]
    fireEvent.click(selectSendCountry)

    const menuItem = screen.getAllByRole('menuitem')[1]
    fireEvent.click(menuItem)

    const input = screen.getAllByLabelText('You send')[0]
    fireEvent.change(input, { target: { value: 100 } })

    const selectReceiveCountry = screen.getAllByText('EUR')[1]
    fireEvent.click(selectReceiveCountry)

    const menuReceiveItem = screen.getAllByRole('menuitem')[2]

    fireEvent.click(menuReceiveItem)

    const receive = screen.getByLabelText('Receipients gets')
    expect(receive).toBeInTheDocument()

    const popUp = screen.getAllByAltText('info icon')[1]
    fireEvent.click(popUp)

    const okButton = screen.getByText('Ok')
    fireEvent.click(okButton)
  })
})

