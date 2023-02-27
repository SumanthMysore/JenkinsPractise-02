import { ComponentStory } from '@storybook/react'
import CurrencyConversion from './index'

export default {
  title: 'Organisms/CurrencyConversion',
  component: CurrencyConversion,
}

const Template: ComponentStory<typeof CurrencyConversion> = (args: any) => (
  <CurrencyConversion {...args} />
)

export const ConvertCurrency = Template.bind({})
ConvertCurrency.args = {}
