import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ChipComponent from './index'

describe('Testing the ChipComponent', () => {
  test('ChipComponent element', () => {
    render(<ChipComponent label="New" />)
    const Chip = screen.getByTestId('chip')
    expect(Chip).toBeInTheDocument()
  })
})
