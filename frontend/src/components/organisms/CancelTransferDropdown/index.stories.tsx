import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CancelTransferDropdown from './index'

export default {
  title: 'Organisms/CancelTransferDropdown',
  component: CancelTransferDropdown,
} as ComponentMeta<typeof CancelTransferDropdown>

const Template: ComponentStory<typeof CancelTransferDropdown> = (args) => (
  <CancelTransferDropdown {...args} />
)

export const CancelDropdown = Template.bind({})
CancelDropdown.args = {
  isOpen: true,
}
