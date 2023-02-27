import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ConfirmBusinessPartner from '.'

export default {
  title: 'Organisms/ConfirmBusinessPartner',
  component: ConfirmBusinessPartner,
} as ComponentMeta<typeof ConfirmBusinessPartner>

const Template: ComponentStory<typeof ConfirmBusinessPartner> = () => (
  <ConfirmBusinessPartner />
)

export const ConfirmPartner = Template.bind({})
ConfirmPartner.args = {}
