import React from 'react'

import { render, screen } from '@testing-library/react'
import ProfileMenu from './index'

describe('Testing ProfileMenu open', () => {
  test('testing', () => {
    render(<ProfileMenu isOpen={false} />)
    const testingProfileMenu = screen.getByTestId('profile-menu')
    expect(testingProfileMenu).toBeDefined()
  })
})

describe('Testing ProfileMenu component close', () => {
  test('testing 2', () => {
    render(<ProfileMenu isOpen={true} />)
    const testingProfileMenu = screen.getByTestId('profile-menu')
    expect(testingProfileMenu).toBeDefined()
  })
})
