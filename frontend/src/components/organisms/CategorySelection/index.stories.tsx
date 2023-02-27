import { ComponentStory } from '@storybook/react'
import {
  ACCOUNT_SELECT_TITLE,
  ACCOUNT_SELECT_VALUE,
  ACCOUNT_SELECT_DATA,
  ACTIVITY_SELECT_TITLE,
  ACTIVITY_SELECT_DATA,
  TRANSACTION_SELECT_DATA,
  TRANSACTION_SELECT_TITLE,
} from '../../../utils/constants'
import CategorySelection from './index'

export default {
  title: 'Organisms/CategorySelection',
  component: CategorySelection,
}

const Template: ComponentStory<typeof CategorySelection> = (args) => (
  <CategorySelection {...args} />
)
export const AccountSelection = Template.bind({})
AccountSelection.args = {
  title: ACCOUNT_SELECT_TITLE,
  subtitle: ACCOUNT_SELECT_VALUE,
  data: ACCOUNT_SELECT_DATA,
}

export const ActivitySelection = Template.bind({})
ActivitySelection.args = {
  title: ACTIVITY_SELECT_TITLE,
  subtitle: '',
  data: ACTIVITY_SELECT_DATA,
}

export const TransactionSelection = Template.bind({})
TransactionSelection.args = {
  title: TRANSACTION_SELECT_TITLE,
  subtitle: '',
  data: TRANSACTION_SELECT_DATA,
}
