import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import ButtonComponent from './index'

test('should renders button', () => {
  render(<ButtonComponent label="Button" textColor="white"></ButtonComponent>)
  const element = screen.getByTestId('button')
  expect(element).toBeInTheDocument()
  fireEvent.click(element)
})
