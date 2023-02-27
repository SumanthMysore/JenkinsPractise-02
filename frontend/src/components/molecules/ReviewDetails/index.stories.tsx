import { ComponentStory } from '@storybook/react'
import ReviewDetail from './index'

export default {
  title: 'Molecules/ReviewDetail',
  component: ReviewDetail,
}

const Template: ComponentStory<typeof ReviewDetail> = (args: any) => (
  <ReviewDetail {...args} />
)

export const RecipientDetail = Template.bind({})
RecipientDetail.args = {
  title: 'Name:',
  value: 'Mario Gabriel',
}
