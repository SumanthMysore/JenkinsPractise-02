import * as React from 'react'
import { render, screen } from '@testing-library/react'
import HyperlinkTypography from './index'

describe('Should render Hyperlink Data', () => {
  test('renders the Hyperlink Data', () => {
    render(<HyperlinkTypography data="Trouble Logging in?" />)
    const data = screen.getByTestId('hyperlink-data')
    expect(data).toBeInTheDocument()
  })
})
