import React from 'react'

import { render, screen } from '@testing-library/react'
import CancelTransactionPopup from './index'

describe('Testing CancelTransactionPopup open', () => {
  test('testing', () => {
    render(
      <CancelTransactionPopup
        question="Are you sure?"
        value="You want to cancel this transfer"
        isOpen={false}
      />
    )
    const testingCancelTransactionPopup = screen.getByTestId(
      'search-field-footer'
    )
    expect(testingCancelTransactionPopup).toBeDefined()
  })
})

describe('Testing CancelTransactionPopup component close', () => {
  test('testing 2', () => {
    render(
      <CancelTransactionPopup
        question="Are you sure?"
        value="You want to cancel this transfer"
        isOpen={true}
      />
    )
    const testingCancelTransactionPopup = screen.getByTestId(
      'search-field-footer'
    )
    expect(testingCancelTransactionPopup).toBeDefined()
  })
})
