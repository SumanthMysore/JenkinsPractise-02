import React from 'react'
import { render, screen } from '@testing-library/react'
import BusinessConfirmation from './index'
import { fireEvent, userEvent } from '@storybook/testing-library'

describe('Testing BusinessConfirmation open', () => {
  test('testing', () => {
    render(<BusinessConfirmation />)
    const testingBusinessConfirmation = screen.getByTestId(
      'business-confirmation'
    )
    expect(testingBusinessConfirmation).toBeDefined()

    const editBefore = screen.getByText(/Edit/i)
    fireEvent.click(editBefore)
    expect(editBefore).toBeDefined()

    const save = screen.getByTestId('save-btn')
    fireEvent.click(save)
    expect(save).toBeDefined()

    const edit = screen.getByText(/Edit/i)
    fireEvent.click(edit)
    expect(edit).toBeDefined()

    const cancel = screen.getByTestId('cancel-btn')
    fireEvent.click(cancel)
    expect(cancel).toBeDefined()

    const editAgain = screen.getByText(/Edit/i)
    fireEvent.click(editAgain)
    expect(editAgain).toBeDefined()

    const biz = screen.getByLabelText(/Business name/i)
    fireEvent.change(biz)
    userEvent.click(biz)
    fireEvent.change(biz, {
      target: { value: 'shridhar.daga@zemosolabs.com' },
    })
    fireEvent.change(biz, { target: { value: '' } })

    const regNum = screen.getByLabelText(/Registration number/i)
    fireEvent.change(regNum)
    userEvent.click(regNum)
    fireEvent.change(regNum, {
      target: { value: 'shridhar.daga@zemosolabs.com' },
    })
    fireEvent.change(regNum, { target: { value: '' } })

    const regAddr = screen.getByLabelText(/Registration address/i)
    fireEvent.change(regAddr)
    userEvent.click(regAddr)
    fireEvent.change(regAddr, {
      target: { value: 'shridhar.daga@zemosolabs.com' },
    })
    fireEvent.change(regAddr, { target: { value: '' } })
  })
})
