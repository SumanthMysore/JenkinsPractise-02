import { ComponentStory } from '@storybook/react'
import ImageWithTypography from './index'
import Empty_state from '../../../../public/assets/Images/Empty_state.svg'
import { DASHBOARD_IMAGE_DATA } from '../../../utils/constants'

export default {
  title: 'Molecules/ImageWithTypography',
  component: ImageWithTypography,
}

const Template: ComponentStory<typeof ImageWithTypography> = (args) => (
  <ImageWithTypography {...args} />
)
export const HomePageData = Template.bind({})
HomePageData.args = {
  image: Empty_state,
  data: DASHBOARD_IMAGE_DATA,
}
