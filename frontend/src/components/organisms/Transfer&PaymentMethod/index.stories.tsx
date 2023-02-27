import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TransferPaymentMethod from './index'

export default {
  title: 'Organisms/TransferPaymentMethod',
  component: TransferPaymentMethod,
} as ComponentMeta<typeof TransferPaymentMethod>

const Template: ComponentStory<typeof TransferPaymentMethod> = () => (
  <TransferPaymentMethod />
)

export const TransferPayment = Template.bind({})
TransferPayment.args = {}
