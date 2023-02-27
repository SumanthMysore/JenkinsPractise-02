import * as React from 'react'
import { render, screen } from '@testing-library/react'
import IconComponent from './index'
import Illustration from '../../../../public/assets/Images/Illustration.svg'

describe('Testing the IconComponent', () => {
  test('book images and icons', () => {
    render(<IconComponent src={Illustration} alt="Illustration" />)
    const element = screen.getByRole('img')
    expect(element).toBeInTheDocument()
  })
})
