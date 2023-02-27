import { ComponentStory } from '@storybook/react'
import theme from '../../../theme/theme'
import CheckboxComponent from './index'

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
}

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
)

export const CheckBox = Template.bind({})
CheckBox.args = {
  checked: true,
  label: '',
  sx: {
    '&.Mui-checked': {
      color: theme.palette.primary.main,
    },
  },
}
