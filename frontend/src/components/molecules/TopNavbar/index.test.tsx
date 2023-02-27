import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TopNavbar from './index'

describe('Should render Top Navbar with Avatar', () => {
  test('renders the top navbar with Avatar', () => {
    render(
      <TopNavbar
        topNavVariant={true}
        isStepper={false}
        stepData={[]}
        activeTab={0}
        isCloseIcon={false}
      />
    )
    const iconsGrid = screen.getByTestId('top-nav')
    expect(iconsGrid).toBeInTheDocument()

    const avatar = screen.getByAltText(/Avatar/i)
    fireEvent.click(avatar)
    expect(avatar).toBeDefined()
  })
})

describe('Should render Top Navbar', () => {
  test('renders the top navbar', () => {
    render(
      <TopNavbar
        topNavVariant={false}
        isStepper={true}
        stepData={[]}
        activeTab={0}
        isCloseIcon={true}
      />
    )
    const iconsGrid = screen.getByTestId('top-nav')
    expect(iconsGrid).toBeInTheDocument()
  })
})
