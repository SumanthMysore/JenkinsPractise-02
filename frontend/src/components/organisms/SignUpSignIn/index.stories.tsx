import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SignUpSignIn from './index'

export default {
  title: 'Organisms/SignUpSignIn',
  component: SignUpSignIn,
} as ComponentMeta<typeof SignUpSignIn>

const Template: ComponentStory<typeof SignUpSignIn> = () => <SignUpSignIn />

export const SignInSignUp = Template.bind({})
SignInSignUp.args = {}
