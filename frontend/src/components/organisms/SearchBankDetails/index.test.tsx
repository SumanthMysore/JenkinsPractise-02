import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchBankDetails from './index'
import { userEvent } from '@storybook/testing-library'

describe('Should render the Search Field for Banks', () => {
  test('renders the Search Field for Banks', () => {
    render(<SearchBankDetails />)

    const searchBox = screen.getByTestId('search-bank')
    expect(searchBox).toBeInTheDocument()

    const searchData = screen.getByPlaceholderText('Start typing to search')
    expect(searchData).toBeInTheDocument()

    const searchBankData = screen.getAllByTestId('search-bank-data')[0]
    expect(searchBankData).toBeInTheDocument()
    userEvent.click(searchData)
    userEvent.type(searchData, 'HDFC')
  })
})

describe('Should render the Cancel Transfer', () => {
  test('renders the Cancell Transfer', () => {
    render(<SearchBankDetails />)

    const searchBox = screen.getByTestId('search-bank')
    expect(searchBox).toBeInTheDocument()

    const cancelTransfer = screen.getByText('Cancel the transfer')
    fireEvent.click(cancelTransfer)

    const NoButton = screen.getByText('No')
    fireEvent.click(NoButton)
  })
})
