import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import TextAreaComponent from './index'

test('should renders textArea', () => {
  render(
    <TextAreaComponent
      placeholder="Enter Your Address"
      label={'Address'}
      helperText={'Type your address here'}
      value={'Mumbai'}
    ></TextAreaComponent>
  )
  const element = screen.getByTestId('textArea')
  expect(element).toBeInTheDocument()
  fireEvent.change(element)
})
