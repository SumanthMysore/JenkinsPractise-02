import { ComponentStory } from '@storybook/react'
import TypographyWithSelection from './index'

export default {
  title: 'Molecules/TypographyWithSelection',
  component: TypographyWithSelection,
}

const Template: ComponentStory<typeof TypographyWithSelection> = (args) => (
  <TypographyWithSelection {...args} />
)
export const SelectingData = Template.bind({})
SelectingData.args = {
  checked: false,
  header: 'Address 1',
  data: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
}
