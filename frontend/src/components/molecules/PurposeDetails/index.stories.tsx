import { Story } from '@storybook/react'
import PurposeDetailsComponent from './index'

export default {
  title: 'Molecules/PurposeDetails',
  component: PurposeDetailsComponent,
}

const Template: Story<typeof PurposeDetailsComponent> = (args: any) => (
  <PurposeDetailsComponent {...args} />
)

export const DetailText = Template.bind({})
DetailText.args = {
  title: 'What’s the purpose for using PocketPay?',
  value:
    'To help us keep PocketPay safe and secure, please tell us what you’re using PocketPay for',
}
