import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TradeAddress from './index'

describe('Should render Trade Address', () => {
  test('renders the Trade Address', () => {
    render(<TradeAddress handleConfirm={() => {}} />)

    const tradeAddress = screen.getByTestId('trade-address')
    expect(tradeAddress).toBeInTheDocument()

    const addTradeAddress = screen.getByText('Add trading address')
    fireEvent.click(addTradeAddress)
    const addAddress = screen.getByLabelText(/Address 1/i)
    fireEvent.change(addAddress, { target: { value: 'Address' } })
    const addTradeAddressButton = screen.getByText('Add')
    fireEvent.click(addTradeAddressButton)

    const editSelectedAddress = screen.getAllByRole('radio')[1]
    fireEvent.click(editSelectedAddress)
    const editTradingAddress = screen.getByText(/Address 2/i)
    fireEvent.click(editTradingAddress)
    const editTradeAddress = screen.getByText('Edit')
    fireEvent.click(editTradeAddress)
    const AddAddressValue = screen.getByLabelText(/Address 2/i)
    fireEvent.change(AddAddressValue, { target: { value: 'Trading Address' } })
    const saveEditTradeAddress = screen.getByText('Save')
    fireEvent.click(saveEditTradeAddress)

    const editCancelTradeAddress = screen.getByText('Edit')
    fireEvent.click(editCancelTradeAddress)
    const cancelEditTradeAddress = screen.getByText('Cancel')
    fireEvent.click(cancelEditTradeAddress)
  })
})
