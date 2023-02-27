import React from 'react'

import { render, screen } from '@testing-library/react'
import BusinessSearch from './index'

describe('Testing BusinessSearch open', () => {
  test('testing', () => {
    render(<BusinessSearch />)
    const testingBusinessSearch = screen.getByTestId('business-search')
    expect(testingBusinessSearch).toBeDefined()
  })
})
