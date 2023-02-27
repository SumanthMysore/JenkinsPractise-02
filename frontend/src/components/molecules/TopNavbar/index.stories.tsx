import { ComponentStory } from '@storybook/react'
import TopNavbar from './index'

export default {
  title: 'Molecules/TopNavbar',
  component: TopNavbar,
}

const Template: ComponentStory<typeof TopNavbar> = (args) => (
  <TopNavbar {...args} />
)

export const TopNav = Template.bind({})
TopNav.args = {
  topNavVariant: true,
}

export const HomeTopNav = Template.bind({})
HomeTopNav.args = {
  topNavVariant: false,
  isStepper: true,
  stepData: [
    { label: 'Amount', content: '<p>Transfer Amount Details</p> ' },
    { label: 'You', content: '<p>You</p>' },
    { label: 'Recipient', content: '<p>Recipient</p>' },
    { label: 'Verification', content: '<p>Verification</p>' },
    { label: 'Review', content: '<p>Review</p>' },
    { label: 'Verification', content: '<p>Verification</p>' },
  ],
  activeTab: 1,
}
