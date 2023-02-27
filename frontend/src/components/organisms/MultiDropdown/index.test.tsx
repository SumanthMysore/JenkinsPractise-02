import React from 'react'

import { fireEvent, render, screen, within } from '@testing-library/react'
import MultiDropdownSelection from '.'
import { userEvent } from '@storybook/testing-library'

describe('Testing MultiDropdownSelection open', () => {
  test('testing', () => {
    render(<MultiDropdownSelection />)
    const testingMultiDropdownSelection = screen.getByTestId('multi-dropdown')
    expect(testingMultiDropdownSelection).toBeDefined()

    const placeHolderTxt = screen.getByLabelText('Search')
    userEvent.click(placeHolderTxt)
    fireEvent.keyDown(placeHolderTxt, { key: 'ArrowDown' })
    expect(placeHolderTxt).toBeDefined()

    const ContinueBtn = screen.getByText(/Continue/i)
    userEvent.click(ContinueBtn)
    expect(ContinueBtn).toBeDefined()

    const test = screen.getAllByTestId('dropdown-id')[0]
    const input = within(test).getAllByRole('combobox')[0]
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'A' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })
  })
})
