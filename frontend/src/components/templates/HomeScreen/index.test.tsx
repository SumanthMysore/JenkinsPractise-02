import React from 'react'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import HomeScreen from './index'
import { Box } from '@mui/material'

describe('Testing HomeScreen open', () => {
  test('testing', () => {
    render(
      <HomeScreen
        dataContainer={<Box width="1072px" height="557px"></Box>}
        isTxnDone={false}
      />
    )
    const testingHomeScreen = screen.getByTestId('home-screen')
    expect(testingHomeScreen).toBeDefined()

    const sendMoney = screen.getByText('Send money')
    userEvent.click(sendMoney)
    expect(sendMoney).toBeDefined()
  })
})
