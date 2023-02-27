import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DatePickerComponent from '.'

export default {
  title: 'Atoms/DatePicker',
  component: DatePickerComponent,
} as ComponentMeta<typeof DatePickerComponent>

const Template: ComponentStory<typeof DatePickerComponent> = (args) => (
  <DatePickerComponent {...args} />
)

export const DateOfBirth = Template.bind({})
DateOfBirth.args = {
  label: 'Date of birth',
}
