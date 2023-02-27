import React from 'react'
import { screen, render } from '@testing-library/react'
import ImageComponent from './index'
import Illustration from '../../../../public/assets/Images/Illustration.svg'

test('Should render Image Component', () => {
  render(<ImageComponent source={Illustration} alt="Illustration" />)
  const element = screen.getByRole('img')
  expect(element).toBeInTheDocument()
})
