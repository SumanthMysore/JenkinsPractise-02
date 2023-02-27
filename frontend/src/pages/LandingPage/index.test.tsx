import React from 'react'
import { render, screen } from '@testing-library/react'
import LandingPage from './index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing LandingPage open', () => {
  test('testing', () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    )
    const testingLandingPage = screen.getByTestId('landing-page')
    expect(testingLandingPage).toBeDefined()
  })
})
