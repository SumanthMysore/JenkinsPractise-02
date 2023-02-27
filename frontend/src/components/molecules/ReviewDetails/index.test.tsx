import React from 'react'
import { render, screen } from '@testing-library/react'
import ReviewDetail from './index'

describe('Should render Review Detail', () => {
  it('renders the Review Detail', () => {
    render(<ReviewDetail title="Name:" value="Mario Gabriel" />)
    const text = screen.getByText(/Name:/i)
    expect(text).toBeInTheDocument()
  })
})
