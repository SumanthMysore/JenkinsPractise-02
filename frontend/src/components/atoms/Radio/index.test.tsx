import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import RadioComponent from './index'

test('should renders radio', () => {
  render(<RadioComponent handleChange={() => {}} checked={false} value={''} />)

  const element = screen.getByTestId('radio')
  expect(element).toBeInTheDocument()
  fireEvent.click(element)
})
