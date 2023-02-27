import React from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import ConfirmBusinessPartner from './index'

describe('Testing ConfirmBusinessPartner Director', () => {
  test('testing ConfirmBusinessPartner Director', () => {
    render(<ConfirmBusinessPartner isNext={false} />)

    const testingConfirmBusinessPartner = screen.getByTestId(
      'confirm-business-partner'
    )
    expect(testingConfirmBusinessPartner).toBeDefined()

    const addBtn = screen.getByText('Add another director')
    userEvent.click(addBtn)
    expect(addBtn).toBeDefined()

    const removeBtn = screen.getByAltText('Close')
    userEvent.click(removeBtn)
    expect(removeBtn).toBeDefined()
  })
})

describe('Testing ConfirmBusinessPartner Shareholder', () => {
  test('testing ConfirmBusinessPartner Shareholder', () => {
    render(<ConfirmBusinessPartner isNext={true} />)
    const testingConfirmBusinessPartner = screen.getByTestId(
      'confirm-business-partner'
    )
    expect(testingConfirmBusinessPartner).toBeDefined()

    const addOwnerBtn = screen.getByText('Add another owner')
    userEvent.click(addOwnerBtn)
    expect(addOwnerBtn).toBeDefined()

    const removeOwnerBtn = screen.getByAltText('Close')
    userEvent.click(removeOwnerBtn)
    expect(removeOwnerBtn).toBeDefined()
  })
})
