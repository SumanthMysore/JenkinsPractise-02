import { ComponentStory } from '@storybook/react'
import SearchBankDetails from './index'

export default {
  title: 'Organisms/SearchBankDetails',
  component: SearchBankDetails,
}

const Template: ComponentStory<typeof SearchBankDetails> = (args) => (
  <SearchBankDetails {...args} />
)

export const SearchBank = Template.bind({})
SearchBank.args = {}
