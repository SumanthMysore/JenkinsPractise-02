import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CancelTransactionPopup from './index'

export default {
  title: 'Molecules/CancelTransactionPopup',
  component: CancelTransactionPopup,
} as ComponentMeta<typeof CancelTransactionPopup>

const Template: ComponentStory<typeof CancelTransactionPopup> = (args) => (
  <CancelTransactionPopup {...args} />
)

export const CancelPopup = Template.bind({})
CancelPopup.args = {
  question: 'Are you sure?',
  value: 'You want to cancel this transfer',
  isOpen: true,
}
