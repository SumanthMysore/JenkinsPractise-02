import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileMenu from './index'

export default {
  title: 'Molecules/ProfileMenu',
  component: ProfileMenu,
} as ComponentMeta<typeof ProfileMenu>

const Template: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)

export const Menu = Template.bind({})
Menu.args = {
  isOpen: true,
}
