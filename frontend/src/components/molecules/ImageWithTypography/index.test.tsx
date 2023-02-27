import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ImageWithTypography from './index'
import Empty_state from '../../../../public/assets/Images/Empty_state.svg'
import { DASHBOARD_IMAGE_DATA } from '../../../utils/constants'

describe('Should render Image with Typography', () => {
  test('renders the image with typography', () => {
    render(
      <ImageWithTypography image={Empty_state} data={DASHBOARD_IMAGE_DATA} />
    )
    const test = screen.getByTestId('image-typography')
    expect(test).toBeInTheDocument()
  })
})
