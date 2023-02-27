import { fireEvent, userEvent } from '@storybook/testing-library'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PasswordFieldComponent from './index'

test('Should render Password Field', () => {
  render(
    <PasswordFieldComponent
      placeHolder="Enter Your Password"
      fieldName="Password"
      isLogin={true}
    />
  )
  const text = screen.getByPlaceholderText(/Enter Your Password/i)
  fireEvent.change(text)
  userEvent.click(text)

  const on = screen.getByTestId('visibility')
  expect(on).toBeInTheDocument()
  userEvent.click(on)

  const input = screen.getByLabelText('Password')
  fireEvent.change(input, { target: { value: 'Password' } })
  fireEvent.change(input, { target: { value: '' } })
})

test('Should render Password Field Icon', () => {
  render(
    <PasswordFieldComponent
      placeHolder="Enter Your Password"
      fieldName="Password"
      isLogin={false}
    />
  )
  const text = screen.getByPlaceholderText(/Enter Your Password/i)
  fireEvent.change(text)
  userEvent.click(text)

  const on = screen.getByTestId('visibility')
  expect(on).toBeInTheDocument()
  userEvent.click(on)

  const input = screen.getByLabelText('Password')
  fireEvent.change(input, { target: { value: 'Password' } })
  fireEvent.change(input, { target: { value: '' } })
})
