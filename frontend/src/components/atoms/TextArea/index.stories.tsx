import { ComponentStory } from '@storybook/react'
import theme from '../../../theme/theme'
import TextAreaComponent from './index'

export default {
  title: 'Atoms/TextArea',
  component: TextAreaComponent,
}

const Template: ComponentStory<typeof TextAreaComponent> = (args) => (
  <TextAreaComponent {...args} />
)

export const FillTextArea = Template.bind({})
FillTextArea.args = {
  label: 'Registered address',
  helperText: 'Type your registered address here',
  sx: {
    color: theme.palette.primary.main,
    '& .MuiOutlinedInput-input, .MuiTextField-root, .MuiInputBase-formControl':
      { width: '516px', height: '132px' },
  },
}
