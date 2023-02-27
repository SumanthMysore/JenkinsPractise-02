import SocialLoginCardComponent from './index'
import google from '../../../../public/assets/Icons/google.svg'
import { ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/SocialLoginCard',
  component: SocialLoginCardComponent,
}

const Template: ComponentStory<typeof SocialLoginCardComponent> = (args) => (
  <SocialLoginCardComponent {...args} />
)

export const Google = Template.bind({})
Google.args = {
  logo: google,
  name: 'Google',
}
