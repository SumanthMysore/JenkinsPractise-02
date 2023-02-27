import React from 'react'
import { Grid } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BasicTemplate from './index'

export default {
  title: 'templates/BasicTemplate',
  component: BasicTemplate,
} as ComponentMeta<typeof BasicTemplate>

const Template: ComponentStory<typeof BasicTemplate> = (args) => (
  <BasicTemplate {...args} />
)

export const SignIn = Template.bind({})
SignIn.args = {
  dataContainer: <Grid width="516px" height="547px"></Grid>,
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
  isBackButtonVisible: true,
  handleIcon: () => alert('Redirect'),
  isCloseIcon: false,
}
