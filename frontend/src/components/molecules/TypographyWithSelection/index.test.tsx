import * as React from 'react'
import { render, screen } from '@testing-library/react'
import TypographyWithSelection from './index'

describe('Should render Typography with Selection', () => {
  test('renders the typography with selection', () => {
    render(
      <TypographyWithSelection
        handleChange={() => {}}
        checked={false}
        header="Address 1"
        data="#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"
      />
    )
    const test = screen.getByTestId('typography-selection')
    expect(test).toBeInTheDocument()
  })
})
