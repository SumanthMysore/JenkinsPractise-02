import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Stepper } from '.'

export default {
  title: 'organisms/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />

export const StyledStepper = Template.bind({})
StyledStepper.args = {
  stepDataArray: [
    { label: 'Amount', content: '<p>Transfer Amount Details</p> ' },
    { label: 'You', content: '<p>You</p>' },
    { label: 'Recipient', content: '<p>Recipient</p>' },
    { label: 'Verification', content: '<p>Verification</p>' },
    { label: 'Review', content: '<p>Review</p>' },
    { label: 'Verification', content: '<p>Verification</p>' },
  ],
  activeTab: 1,
}
