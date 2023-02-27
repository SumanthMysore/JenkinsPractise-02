import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeScreen from './index'
import { Box } from '@mui/material'

export default {
  title: 'templates/HomeScreen',
  component: HomeScreen,
} as ComponentMeta<typeof HomeScreen>

const Template: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen {...args} />
)

export const HomePage = Template.bind({})
HomePage.args = {
  dataContainer: <Box width="1330px" height="557px" bgcolor={'white'}></Box>,
  isTxnDone: false,
}
