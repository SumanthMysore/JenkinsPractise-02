import React from 'react'

import { render, screen } from '@testing-library/react'
import BasicTemplate from './index'
import { Box } from '@mui/material'

describe('Testing BasicTemplate with Stepper', () => {
  test('testing', () => {
    render(
      <BasicTemplate
        dataContainer={<Box width="516px" height="547px"></Box>}
        isStepper={false}
        stepData={[]}
        activeTab={0}
        isCloseIcon={false}
        isBackButtonVisible={false}
      />
    )
    const testingBasicTemplate = screen.getByTestId('basic-template')
    expect(testingBasicTemplate).toBeDefined()
  })
})

describe('Testing BasicTemplate without Stepper', () => {
  test('testing', () => {
    render(
      <BasicTemplate
        dataContainer={<Box width="516px" height="547px"></Box>}
        isStepper={true}
        stepData={[]}
        activeTab={0}
        isBackButtonVisible={true}
        isCloseIcon={true}
      />
    )
    const testingBasicTemplate = screen.getByTestId('basic-template')
    expect(testingBasicTemplate).toBeDefined()
  })
})
