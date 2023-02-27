import React from 'react'
import { render, screen } from '@testing-library/react'
import SideNav from '.'

describe('Testing BenificiaryDetails open', () => {
  test('testing', () => {
    render(<SideNav isTxnDone={false} />)
    const testingSideNav = screen.getByTestId('side-nav')
    expect(testingSideNav).toBeDefined()
  })
})
describe('Testing BenificiaryDetails open', () => {
  test('testing', () => {
    render(<SideNav isTxnDone={true} />)
    const testingSideNav = screen.getByTestId('side-nav')
    expect(testingSideNav).toBeDefined()
  })
})
