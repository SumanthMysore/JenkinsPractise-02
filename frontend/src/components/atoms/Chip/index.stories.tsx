import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChipComponent from './index'

export default {
  title: 'Atoms/Chips',
  component: ChipComponent,
} as ComponentMeta<typeof ChipComponent>

const Template: ComponentStory<typeof ChipComponent> = (args) => (
  <ChipComponent {...args} />
)

export const Chip = Template.bind({})
Chip.args = {
  label: 'New',
}
