import { Box } from '@mui/material'
import { ComponentStory } from '@storybook/react'
import PasswordFieldComponent from './index'

export default {
  title: 'Atoms/PasswordField',
  component: PasswordFieldComponent,
}

const Template: ComponentStory<typeof PasswordFieldComponent> = (args) => (
  <Box sx={{ width: '516px' }}>
    <PasswordFieldComponent {...args} />
  </Box>
)

export const PasswordDefault = Template.bind({})
PasswordDefault.args = {
  fieldName: 'Password',
  placeHolder: 'Enter Your Password',
  isLogin: true,
}

export const Password = Template.bind({})
Password.args = {
  fieldName: 'Password',
  placeHolder: 'Enter Your Password',
  isLogin: false,
}
