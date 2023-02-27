import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TextFieldComponent from './index'
import { userEvent } from '@storybook/testing-library'

describe('Testing the TextFieldComponent', () => {
  test('TextFieldComponent element', () => {
    const test = jest.fn()
    render(
      <TextFieldComponent
        placeholder="Enter you email address"
        label="Email"
        onChange={test}
      />
    )

    const Input = screen.getByTestId('inputText')
    expect(Input).toBeInTheDocument()

    const text = screen.getByPlaceholderText(/Enter you email address/i)
    fireEvent.change(text)
    userEvent.click(text)
    fireEvent.change(text, {
      target: { value: 'shridhar.daga@zemosolabs.com' },
    })
    fireEvent.change(text, { target: { value: '' } })
  })
})
