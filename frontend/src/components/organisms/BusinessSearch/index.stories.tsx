import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BusinessSearch from './index'

export default {
  title: 'Organisms/BusinessSearch',
  component: BusinessSearch,
} as ComponentMeta<typeof BusinessSearch>

const Template: ComponentStory<typeof BusinessSearch> = () => <BusinessSearch />

export const BusinessSearchDetails = Template.bind({})
BusinessSearchDetails.args = {}
