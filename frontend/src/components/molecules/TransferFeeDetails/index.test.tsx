import React from 'react'
import { render, screen } from '@testing-library/react'
import TransferFeeComponent from '.'
import info from '../../../../public/assets/Icons/Info.svg'

describe('Should render transfer details', () => {
  it('renders the transfer details', () => {
    render(
      <TransferFeeComponent
        title="Hello User:"
        value="Review your details"
        icon={info}
      />
    )
    const text = screen.getByText(/Hello User:/i)
    expect(text).toBeInTheDocument()
  })
})
