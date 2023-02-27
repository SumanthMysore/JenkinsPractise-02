import React from 'react'
import { render, screen } from '@testing-library/react'
import HeaderWithLink from './index'

describe('Should render Header With Link', () => {
  it('renders the Header with Link', () => {
    render(<HeaderWithLink title="Transfer details" value="Edit" />)
    const text = screen.getByText(/Transfer details/i)
    expect(text).toBeInTheDocument()
  })
})
