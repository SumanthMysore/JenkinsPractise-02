import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserDetails from '.'

export default {
  title: 'Organisms/UserDetails',
  component: UserDetails,
} as ComponentMeta<typeof UserDetails>

const Template: ComponentStory<typeof UserDetails> = () => <UserDetails />

export const YourDetails = Template.bind({})
YourDetails.args = {}
