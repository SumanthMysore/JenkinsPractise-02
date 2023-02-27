import { ComponentStory } from '@storybook/react'
import ReviewDetails from './index'

export default {
  title: 'Organisms/ReviewDetails',
  component: ReviewDetails,
}

const Template: ComponentStory<typeof ReviewDetails> = (args) => (
  <ReviewDetails {...args} />
)

export const ReviewTransferDetails = Template.bind({})
ReviewTransferDetails.args = {
  transferedAmount: '114.68 EUR',
  receivedAmount: '100.00 GBP',
  fee: '00.00 GBP',
  amountConvert: '77.74 GBP',
  rate: '1 GBP = 1.14 EUR',
  name: 'Mario Gabriel',
  email: 'mario.gabriel@gmail.com',
  accountNumber: '21363738391910',
  accountType: 'Checking',
}
