import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import CheckboxComponent from './index'

test('should renders checkbox', () => {
  render(
    <CheckboxComponent label="Checkbox" checked={false}></CheckboxComponent>
  )
  const element = screen.getByTestId('checkbox')
  expect(element).toBeInTheDocument()
  fireEvent.click(element)
})
