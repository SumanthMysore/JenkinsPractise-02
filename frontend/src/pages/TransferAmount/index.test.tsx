import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TransferAmount from './index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Should render the Transfer Amount', () => {
  test('renders the Transfer Amount', () => {
    render(
      <Router>
        <TransferAmount />
      </Router>
    )

    const transferAmount = screen.getByTestId('transfer-amount')
    expect(transferAmount).toBeInTheDocument()

    const currencyTab = screen.getByText('Continue')
    fireEvent.click(currencyTab)

    const youTab = screen.getByText('Business or Charity')
    fireEvent.click(youTab)

    const recipientTab = screen.getByText('Continue')
    fireEvent.click(recipientTab)

    const verificationTab = screen.getByText('Continue')
    fireEvent.click(verificationTab)

    const directorDetails = screen.getByText('Continue')
    fireEvent.click(directorDetails)

    const shareHolderDetails = screen.getByText('Continue')
    fireEvent.click(shareHolderDetails)

    const reviewTab = screen.getByText('Confirm and continue')
    fireEvent.click(reviewTab)

    const transferFromBankAccount = screen.getByText('Continue to pay')
    fireEvent.click(transferFromBankAccount)

    const searchBank = screen.getByText('Axis')
    fireEvent.click(searchBank)

    const lloydDetails = screen.getByText('Continue to pay')
    fireEvent.click(lloydDetails)

    const lloydDetailsSummaryRedirect = screen.getByAltText('Arrow')
    fireEvent.click(lloydDetailsSummaryRedirect)

    const lloydDetailsRedirect = screen.getByAltText('Arrow')
    fireEvent.click(lloydDetailsRedirect)

    const searchBankRedirect = screen.getByAltText('Arrow')
    fireEvent.click(searchBankRedirect)

    const transferFromBankAccountRedirect = screen.getByAltText('Arrow')
    fireEvent.click(transferFromBankAccountRedirect)

    const reviewTabRedirect = screen.getAllByAltText('Arrow')[0]
    fireEvent.click(reviewTabRedirect)

    const stareHolderDetailsRedirect = screen.getByAltText('Arrow')
    fireEvent.click(stareHolderDetailsRedirect)

    const directorDetailsRedirect = screen.getByAltText('Arrow')
    fireEvent.click(directorDetailsRedirect)

    const verificationTabRedirect = screen.getByAltText('Arrow')
    fireEvent.click(verificationTabRedirect)

    const recipientTabRedirect = screen.getByAltText('Arrow')
    fireEvent.click(recipientTabRedirect)

    const youTabRedirect = screen.getByAltText('Arrow')
    fireEvent.click(youTabRedirect)

    const currencyTabRedirect = screen.getByAltText('Arrow')
    fireEvent.click(currencyTabRedirect)
  })
})
