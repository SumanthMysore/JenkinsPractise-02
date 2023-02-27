import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from './index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing HomePage open', () => {
  test('testing', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    )
    const testingHomePage = screen.getByTestId('home-page')
    expect(testingHomePage).toBeDefined()
  })
})
