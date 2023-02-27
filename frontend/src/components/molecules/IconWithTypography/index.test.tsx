import React from 'react'

import { render, screen } from '@testing-library/react'
import IconWithTypography from './index'
import icon from '../../../../public/assets/Icons/send.svg'

describe('Testing IconWithTypography component', () => {
  test('testing', () => {
    render(<IconWithTypography src={icon}>Send Money</IconWithTypography>)
    const testingIconWithTypography = screen.getAllByRole('img')
    expect(testingIconWithTypography).toHaveLength(1)
  })
})
