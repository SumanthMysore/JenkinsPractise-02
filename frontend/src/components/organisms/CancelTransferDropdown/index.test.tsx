import React from 'react'

import { render, screen } from '@testing-library/react'
import CancelTransferDropdown from './index'
import { userEvent } from '@storybook/testing-library'

describe('Testing CancelTransferDropdown close', () => {
  test('testing', () => {
    render(<CancelTransferDropdown isOpen={false} />)
    const testingCancelTransferDropdown = screen.getByTestId(
      /cancel-transfer-dropdown/i
    )
    expect(testingCancelTransferDropdown).toBeDefined()
  })
})

describe('Testing CancelTransferDropdown open', () => {
  test('testing', () => {
    render(<CancelTransferDropdown isOpen={true} />)
    const testingCancelTransferDropdown = screen.getByTestId(
      /cancel-transfer-dropdown/i
    )
    expect(testingCancelTransferDropdown).toBeDefined()

    const selectBoxTest = screen.getByTestId(/select-account-box/i)
    userEvent.click(selectBoxTest)
    expect(selectBoxTest).toBeDefined()

    const optionBoxTest = screen.getByTestId(/select-option-box/i)
    userEvent.click(optionBoxTest)
    expect(optionBoxTest).toBeDefined()
  })
})
