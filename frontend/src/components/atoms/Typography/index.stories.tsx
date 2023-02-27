import { Story } from '@storybook/react'
import theme from '../../../theme/theme'
import TypographyComponent from './index'

export default {
  title: 'Atoms/Typography',
  component: TypographyComponent,
}

const Template: Story<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>Typography</TypographyComponent>
)

export const H1 = Template.bind({})
H1.args = {
  variant: 'h1',
  color: theme.palette.text.primary,
}

export const Caption = Template.bind({})
Caption.args = {
  variant: 'caption',
  color: theme.palette.info.main,
}

export const Body1 = Template.bind({})
Body1.args = {
  variant: 'body1',
  color: theme.palette.text.primary,
}

export const Body2 = Template.bind({})
Body2.args = {
  variant: 'body2',
  color: theme.palette.info.main,
}

export const Body3 = Template.bind({})
Body3.args = {
  variant: 'h5',
  color: theme.palette.info.light,
}
