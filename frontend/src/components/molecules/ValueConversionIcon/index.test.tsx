import React from 'react'
import { render, screen } from '@testing-library/react'
import ValueConversion from './index'
import arrowRight from '../../../../public/assets/Icons/arrowRight.svg'

describe('Should render value conversion', () => {
  it('renders the value conversion', () => {
    render(
      <ValueConversion
        transferedAmount="114.68 EUR"
        receivedAmount="100.00 GBP"
        logo={arrowRight}
        name="Amount Conversion"
      />
    )
    const text = screen.getByText(/114.68 EUR/i)
    expect(text).toBeInTheDocument()
  })
})
