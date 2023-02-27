import { ComponentStory } from '@storybook/react'
import HeaderWithLink from './index'

export default {
  title: 'Molecules/HeaderWithLink',
  component: HeaderWithLink,
}

const Template: ComponentStory<typeof HeaderWithLink> = (args) => (
  <HeaderWithLink {...args} />
)

export const HeaderLink = Template.bind({})
HeaderLink.args = {
  title: 'Transfer details',
  value: 'Edit',
}
