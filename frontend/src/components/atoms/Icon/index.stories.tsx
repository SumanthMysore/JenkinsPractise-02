import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconComponent from './index'
import icon from '../../../../public/assets/Icons/Email.svg'

export default {
  title: 'Atoms/Icons',
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>

const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
  src: icon,
  alt: 'icon',
}
