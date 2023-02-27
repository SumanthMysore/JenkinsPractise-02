import React from 'react'
import TypographyComponent from './index'
import { render, screen } from '@testing-library/react'

describe('Should render Typography Component', () => {
  it('renders the Typography Component', () => {
    render(<TypographyComponent>Hello World!</TypographyComponent>)
    const text = screen.getByText(/Hello World!/i)
    expect(text).toBeInTheDocument()
  })
})
