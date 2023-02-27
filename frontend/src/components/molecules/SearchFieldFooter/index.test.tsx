import React from 'react'

import { render, screen } from '@testing-library/react'
import SearchFieldFooter from './index'

describe('Testing SearchFieldFooter component', () => {
  test('testing', () => {
    render(
      <SearchFieldFooter
        question="Can’t find your business?"
        value="Enter your details"
      />
    )
    const testingSearchFieldFooter = screen.getByText('Enter your details')
    expect(testingSearchFieldFooter).toBeDefined()
  })
})
