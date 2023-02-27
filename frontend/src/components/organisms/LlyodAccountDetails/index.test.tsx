import React from 'react'

import { render, screen } from '@testing-library/react'
import LlyodAccountDetail from './index'
import { userEvent } from '@storybook/testing-library'

describe('Testing LlyodAccountDetail open', () => {
  test('testing', () => {
    render(<LlyodAccountDetail isNext={false} />)
    const testingLlyodAccountDetail = screen.getByTestId('llyod-account-detail')
    expect(testingLlyodAccountDetail).toBeDefined()

    const continue_btn = screen.getByText(/Continue to pay/i)
    userEvent.click(continue_btn)
    expect(continue_btn).toBeDefined()
  })
})

describe('Testing LlyodAccountDetail next', () => {
  test('testing', () => {
    render(<LlyodAccountDetail isNext={true} />)
    const testingLlyodAccountDetail = screen.getByTestId('llyod-account-detail')
    expect(testingLlyodAccountDetail).toBeDefined()
  })
})
