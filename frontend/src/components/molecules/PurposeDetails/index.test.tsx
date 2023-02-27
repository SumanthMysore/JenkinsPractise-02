import React from 'react'
import { render, screen } from '@testing-library/react'
import PurposeDetailsComponent from './index'

describe('Should render purpose details', () => {
  it('renders the purpose details', () => {
    render(
      <PurposeDetailsComponent
        title="Hello User:"
        value="Review your account"
      />
    )
    const text = screen.getByText(/Hello User:/i)
    expect(text).toBeInTheDocument()
  })
})
