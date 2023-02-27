import { ComponentStory } from '@storybook/react'
import theme from '../../../theme/theme'
import RadioComponent from './index'

export default {
  title: 'Atoms/Radio',
  component: RadioComponent,
}

const Template: ComponentStory<typeof RadioComponent> = (args) => (
  <RadioComponent {...args} />
)

export const ClickRadio = Template.bind({})
ClickRadio.args = {
  checked: true,
  value: 'a',
  sx: {
    color: theme.palette.primary.main,
  },
}
