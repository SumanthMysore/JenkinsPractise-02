import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputWithDropdown from './index'

export default {
  title: 'Molecules/InputWithDropdown',
  component: InputWithDropdown,
} as ComponentMeta<typeof InputWithDropdown>

const Template: ComponentStory<typeof InputWithDropdown> = (args) => (
  <InputWithDropdown {...args} />
)

export const InputDropdownRight = Template.bind({})
InputDropdownRight.args = {
  isCurrency: true,
  placeholder: 'You Send',
  value: 'Select currency',
}

export const InputDropdownLeft = Template.bind({})
InputDropdownLeft.args = {
  isCurrency: false,
  placeholder: 'Mobile number',
  mobileNumber: '+44 020 7947 6330',
}
