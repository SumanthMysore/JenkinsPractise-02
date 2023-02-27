import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LlyodAccountDetail from './index'

export default {
  title: 'Organisms/LlyodAccountDetail',
  component: LlyodAccountDetail,
} as ComponentMeta<typeof LlyodAccountDetail>

const Template: ComponentStory<typeof LlyodAccountDetail> = () => (
  <LlyodAccountDetail />
)

export const Llyod_Account = Template.bind({})
Llyod_Account.args = {
  isNext: false,
}
