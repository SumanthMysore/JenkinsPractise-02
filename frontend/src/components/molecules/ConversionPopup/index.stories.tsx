import { ComponentStory } from '@storybook/react'
import ConversionPopupComponent from './index'

export default {
  title: 'Molecules/Conversionpup',
  component: ConversionPopupComponent,
}

const Template: ComponentStory<typeof ConversionPopupComponent> = (args) => (
  <ConversionPopupComponent {...args} />
)

export const TransferDetails = Template.bind({})
TransferDetails.args = {
  isOpen: true,
  title: 'We’ll apply this rate if we receive your money today.',
  buttonLabel: 'Ok',
}
