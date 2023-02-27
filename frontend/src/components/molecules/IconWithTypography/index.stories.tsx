import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconWithTypography from './index'
import icon from '../../../../public/assets/Icons/send.svg'

export default {
  title: 'Molecules/IconText',
  component: IconWithTypography,
} as ComponentMeta<typeof IconWithTypography>

const Template: ComponentStory<typeof IconWithTypography> = (args) => (
  <IconWithTypography {...args} />
)

export const IconText = Template.bind({})
IconText.args = {
  children: 'Send Money',
  src: icon,
  value: 'Pay an international employee, invoice, or expense',
}

export const Optional = Template.bind({})
Optional.args = {
  children: 'Send Money',
  src: icon,
}
