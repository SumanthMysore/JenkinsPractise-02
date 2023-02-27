import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AccordianComponent from './index'
import { GBP_100_3, TRANSFER_AMOUNT } from '../../../utils/constants'

export default {
  title: 'Organisms/AccordianComponent',
  component: AccordianComponent,
} as ComponentMeta<typeof AccordianComponent>

const Template: ComponentStory<typeof AccordianComponent> = (args) => (
  <AccordianComponent {...args} />
)

export const Accordian = Template.bind({})
Accordian.args = {
  amtSentInGBP: GBP_100_3,
  amtSentInEUR: TRANSFER_AMOUNT,
}
