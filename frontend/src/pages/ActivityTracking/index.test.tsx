import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ActivityTracking from './index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Should render the Activity Selection', () => {
  test('renders the Activity Selection', () => {
    render(
      <Router>
        <ActivityTracking />
      </Router>
    )

    const activityTracking = screen.getByTestId('activity-selection')
    expect(activityTracking).toBeInTheDocument()
  })
})
