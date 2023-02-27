import { ComponentStory } from '@storybook/react'
import HyperlinkTypography from './index'

export default {
  title: 'Molecules/HyperlinkTypography',
  component: HyperlinkTypography,
}

const Template: ComponentStory<typeof HyperlinkTypography> = (args) => (
  <HyperlinkTypography {...args} />
)
export const Data = Template.bind({})
Data.args = {
  data: 'Trouble Logging in?',
}
