import { ComponentStory } from '@storybook/react'
import { IconsGrid } from './index'
import google from '../../../../public/assets/Icons/google.svg'
import facebook from '../../../../public/assets/Icons/facebook.svg'
import apple from '../../../../public/assets/Icons/apple.svg'

export default {
  title: 'Molecules/IconsGrid',
  component: IconsGrid,
}

const Template: ComponentStory<typeof IconsGrid> = (args) => (
  <IconsGrid {...args} />
)
export const SocialLoginCards = Template.bind({})
SocialLoginCards.args = {
  icons: [
    { icon: google, name: 'google' },
    { icon: facebook, name: 'facebook' },
    { icon: apple, name: 'apple' },
  ],
  socialIcons: true,
}
