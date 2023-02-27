import { Box } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextFieldComponent from './index'

export default {
  title: 'Atoms/InputField',
  component: TextFieldComponent,
} as ComponentMeta<typeof TextFieldComponent>

const Template: ComponentStory<typeof TextFieldComponent> = (args) => (
  <Box sx={{ width: '516px' }}>
    <TextFieldComponent {...args} />
  </Box>
)

export const Input = Template.bind({})
Input.args = {
  placeholder: 'Enter you email address',
  label: 'Email',
}
