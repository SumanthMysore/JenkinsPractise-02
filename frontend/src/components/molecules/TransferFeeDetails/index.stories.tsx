import { Story } from '@storybook/react'
import TransferFeeComponent from './index'
import info from '../../../../public/assets/Icons/Info.svg'

export default {
  title: 'Molecules/TransferFee',
  component: TransferFeeComponent,
}

const Template: Story<typeof TransferFeeComponent> = (args: any) => (
  <TransferFeeComponent {...args} />
)

export const TransferAmount = Template.bind({})
TransferAmount.args = {
  title: 'Low cost transfer fee:',
  value: '3.69GBP',
  icon: info,
  from: 'From',
}
