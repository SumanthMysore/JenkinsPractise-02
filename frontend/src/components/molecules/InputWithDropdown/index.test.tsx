import React from 'react'

import { render, screen } from '@testing-library/react'
import InputWithDropdown from './index'

describe('Testing InputWithDropdown open', () => {
  test('testing', () => {
    render(
      <InputWithDropdown
        placeholder="Mobile Number"
        isCurrency={false}
        value={''}
      />
    )
    const testingInputWithDropdown = screen.getByTestId('input-with-dropdown')
    expect(testingInputWithDropdown).toBeDefined()
  })
})

describe('Testing InputWithDropdown component close', () => {
  test('testing 2', () => {
    render(
      <InputWithDropdown placeholder="You Send" isCurrency={true} value={''} />
    )

    const testingInputWithDropdown = screen.getByTestId('input-with-dropdown')
    expect(testingInputWithDropdown).toBeDefined()
  })
})

