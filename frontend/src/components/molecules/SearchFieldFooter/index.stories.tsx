import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchFieldFooter from './index'

export default {
  title: 'Molecules/SearchFieldFooter',
  component: SearchFieldFooter,
} as ComponentMeta<typeof SearchFieldFooter>

const Template: ComponentStory<typeof SearchFieldFooter> = (args) => (
  <SearchFieldFooter {...args} />
)

export const SearchFooter = Template.bind({})
SearchFooter.args = {
  question: 'Can’t find your business?',
  value: 'Enter your details',
}
