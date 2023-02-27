import { ComponentStory } from '@storybook/react'
import ImageComponent from './index'
import Illustration from '../../../../public/assets/Images/Illustration.svg'

export default {
  title: 'Atoms/Images',
  component: ImageComponent,
}

const Template: ComponentStory<typeof ImageComponent> = (args) => (
  <ImageComponent {...args} />
)

export const Image = Template.bind({})
Image.args = {
  source: Illustration,
  alt: 'Illustration',
}
