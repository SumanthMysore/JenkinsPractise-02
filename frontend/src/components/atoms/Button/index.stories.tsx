import { ComponentStory } from '@storybook/react'
import theme from '../../../theme/theme'
import { CANCEL_TRANSFER_BTN, CONTINUE_PAY_BTN } from '../../../utils/constants'
import ButtonComponent from './index'

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
}

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
)

export const Contained = Template.bind({})
Contained.args = {
  label: CONTINUE_PAY_BTN,
  textColor: theme.palette.info.contrastText,
  onClick: () => window.alert('Sign In!!'),

  sx: {
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: 'white',
    },
    width: '218px',
    height: '56px',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  },
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: CANCEL_TRANSFER_BTN,
  textColor: theme.palette.primary.main,
  onClick: () => window.alert('Cancelling!'),

  sx: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.dark,
      border: 'none',
    },
    width: '218px',
    height: '56px',
    backgroundColor: theme.palette.info.contrastText,
    boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.light}`,
  },
}
