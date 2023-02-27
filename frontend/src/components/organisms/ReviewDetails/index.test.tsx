import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ReviewDetails from './index'

describe('Should render the Review Details in Save State', () => {
  test('renders the Review Details Save State', () => {
    render(
      <ReviewDetails
        transferedAmount="114.68 EUR"
        receivedAmount="100.00 GBP"
        fee="00.00 GBP"
        amountConvert="77.74 GBP"
        rate="1 GBP = 1.14 EUR"
        name="Mario Gabriel"
        email="mario.gabriel@gmail.com"
        accountNumber="21363738391910"
        accountType="Checking"
      />
    )

    const reviewDetails = screen.getByTestId('review-details')
    expect(reviewDetails).toBeInTheDocument()

    const edit = screen.getAllByText('Edit')[0]
    fireEvent.click(edit)
    const transferDetails = screen.getByTestId('transfer-details')
    expect(transferDetails).toBeInTheDocument()

    const transferSave = screen.getByText('Save')
    fireEvent.click(transferSave)

    const change = screen.getByText('Change')
    fireEvent.click(change)
    const businessDetails = screen.getByTestId('business-details')
    expect(businessDetails).toBeInTheDocument()

    const businessSave = screen.getByText('Save')
    fireEvent.click(businessSave)
  })
})

describe('Should render the Review Details in Cancel State', () => {
  test('renders the Review Details Cancel State', () => {
    render(
      <ReviewDetails
        transferedAmount="114.68 EUR"
        receivedAmount="100.00 GBP"
        fee="00.00 GBP"
        amountConvert="77.74 GBP"
        rate="1 GBP = 1.14 EUR"
        name="Mario Gabriel"
        email="mario.gabriel@gmail.com"
        accountNumber="21363738391910"
        accountType="Checking"
      />
    )

    const reviewDetails = screen.getByTestId('review-details')
    expect(reviewDetails).toBeInTheDocument()

    const edit = screen.getAllByText('Edit')[0]
    fireEvent.click(edit)
    const transferDetails = screen.getByTestId('transfer-details')
    expect(transferDetails).toBeInTheDocument()

    const transferCancel = screen.getByText('Cancel')
    fireEvent.click(transferCancel)

    const change = screen.getByText('Change')
    fireEvent.click(change)
    const businessDetails = screen.getByTestId('business-details')
    expect(businessDetails).toBeInTheDocument()

    const businessCancel = screen.getByText('Cancel')
    fireEvent.click(businessCancel)
  })
})
