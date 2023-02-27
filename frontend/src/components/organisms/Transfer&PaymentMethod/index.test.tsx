import React from 'react'
import { render, screen } from '@testing-library/react'
import TransferPaymentMethod from './index'
import { userEvent } from '@storybook/testing-library'

describe('Testing TransferPaymentMethod open', () => {
  test('testing', () => {
    render(<TransferPaymentMethod />)
    const testingTransferPaymentMethod = screen.getByTestId(
      'transfer-payment-method'
    )
    expect(testingTransferPaymentMethod).toBeDefined()

    const radio_btn_a = screen.getAllByRole('radio')[0]
    userEvent.click(radio_btn_a)
    expect(radio_btn_a).toBeDefined()

    const continue_btn = screen.getByText(/Continue to pay/i)
    userEvent.click(continue_btn)
    expect(continue_btn).toBeDefined()

    const radio_btn_e = screen.getAllByRole('radio')[0]
    userEvent.click(radio_btn_e)
    expect(radio_btn_e).toBeDefined()

    const continue_btn_again = screen.getByText(/Continue to pay/i)
    userEvent.click(continue_btn_again)
    expect(continue_btn_again).toBeDefined()
  })
})
