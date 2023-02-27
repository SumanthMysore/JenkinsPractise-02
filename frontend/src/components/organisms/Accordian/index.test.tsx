import React from 'react'

import { render, screen } from '@testing-library/react'
import AccordianComponent from './index'
import { userEvent } from '@storybook/testing-library'

describe('Testing AccordianComponent open', () => {
  test('testing', () => {
    render(
      <AccordianComponent amtSentInGBP="100 GBP" amtSentInEUR="114.68 EUR" />
    )
    const testingAccordian = screen.getByTestId('accordian')
    expect(testingAccordian).toBeDefined()

    const share = screen.getByAltText(/share_icon/i)
    userEvent.click(share)
    expect(share).toBeDefined()

    const cancel_btn = screen.getByText(/Cancel the transfer/i)
    userEvent.click(cancel_btn)
    expect(cancel_btn).toBeDefined()
  })
})
