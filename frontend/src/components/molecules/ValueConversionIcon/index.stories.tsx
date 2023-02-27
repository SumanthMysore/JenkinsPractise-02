import { ComponentStory } from '@storybook/react'
import ValueConversion from './index'
import arrowRight from '../../../../public/assets/Icons/arrowRight.svg'

export default {
  title: 'Molecules/ValueConversion',
  component: ValueConversion,
}

const Template: ComponentStory<typeof ValueConversion> = (args: any) => (
  <ValueConversion {...args} />
)

export const TransferDetails = Template.bind({})
TransferDetails.args = {
  transferedAmount: '114.68 EUR',
  receivedAmount: '100.00 GBP',
  logo: arrowRight,
  name: 'Amount Conversion',
}
