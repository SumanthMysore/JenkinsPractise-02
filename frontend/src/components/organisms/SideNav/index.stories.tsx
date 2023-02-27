import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideNav from '.'

export default {
  title: 'Organisms/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav {...args} />

export const SideNavDetails = Template.bind({})
SideNavDetails.args = {
  isTxnDone: true
}
