import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BenificiaryDetails from './index'

export default {
  title: 'Organisms/BenificiaryDetails',
  component: BenificiaryDetails,
} as ComponentMeta<typeof BenificiaryDetails>

const Template: ComponentStory<typeof BenificiaryDetails> = () => (
  <BenificiaryDetails />
)

export const BenificiaryDetail = Template.bind({})
BenificiaryDetail.args = {}
