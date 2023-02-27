import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PasswordChange from './index'

export default {
  title: 'Organisms/PasswordChange',
  component: PasswordChange,
} as ComponentMeta<typeof PasswordChange>

const Template: ComponentStory<typeof PasswordChange> = () => <PasswordChange />

export const PasswordChanged = Template.bind({})
PasswordChanged.args = {}
