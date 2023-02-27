import { ComponentStory } from '@storybook/react'
import SearchBoxComponent from './index'
import icon from '../../../../public/assets/Icons/search.svg'

export default {
  title: 'Molecules/SearchBox',
  component: SearchBoxComponent,
}

const Template: ComponentStory<typeof SearchBoxComponent> = (args) => (
  <SearchBoxComponent {...args} />
)

export const SearchBoxDetails = Template.bind({})
SearchBoxDetails.args = {
  src: icon,
  alt: 'icon',
  placeholder: 'Select your business',
  footerLabel: 'Can’t find your business?',
  footerValue: 'Enter your details',
}
