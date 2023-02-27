import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BusinessSearch from '.'
import MultiDropdownSelection from '.'

export default {
  title: 'Organisms/MultiDropdownSelection',
  component: BusinessSearch,
} as ComponentMeta<typeof BusinessSearch>

const Template: ComponentStory<typeof MultiDropdownSelection> = () => (
  <MultiDropdownSelection />
)

export const MultiDropdown = Template.bind({})
MultiDropdown.args = {}
