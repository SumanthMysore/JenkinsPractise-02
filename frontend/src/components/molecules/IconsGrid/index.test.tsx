import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { IconsGrid } from './index'
import google from '../../../../public/assets/Icons/google.svg'
import facebook from '../../../../public/assets/Icons/facebook.svg'
import apple from '../../../../public/assets/Icons/apple.svg'

describe('Should render Social Login Cards Icons Grid', () => {
  test('renders the social login cards icon', () => {
    render(
      <IconsGrid
        icons={[
          { icon: google, name: 'google' },
          { icon: facebook, name: 'facebook' },
          { icon: apple, name: 'apple' },
        ]}
        socialIcons={true}
      />
    )
    const iconsGrid = screen.getByTestId('icons-grid')
    expect(iconsGrid).toBeInTheDocument()
  })
})

describe('Should render Icons Grid', () => {
  test('renders the icons grid', () => {
    render(
      <IconsGrid
        icons={[
          { icon: google, name: 'google' },
          { icon: facebook, name: 'facebook' },
          { icon: apple, name: 'apple' },
        ]}
        socialIcons={false}
      />
    )
    const iconsGrid = screen.getByTestId('icons-grid')
    expect(iconsGrid).toBeInTheDocument()
  })
})
