import React from 'react'

import { render, screen } from '@testing-library/react'
import TypographyWithIcon from './index'
import icon from '../../../../public/assets/Icons/send.svg'
import rightArrow from '../../../../public/assets/Icons/chevron-right.svg'

describe('Testing TypographyWithIcon component', () => {
  test('testing', () => {
    render(
      <TypographyWithIcon src={icon} arrow={rightArrow}>
        SBI
      </TypographyWithIcon>
    )
    const arrowIcon = screen.getByAltText('arrow-icon')
    expect(arrowIcon).toBeDefined()
  })
})
