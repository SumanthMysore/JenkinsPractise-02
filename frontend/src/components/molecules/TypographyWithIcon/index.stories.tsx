import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TypographyWithIcon from './index'
import icon from '../../../../public/assets/Icons/sbi.svg'
import rightArrow from '../../../../public/assets/Icons/chevron-right.svg'

export default {
  title: 'Molecules/TypograpgyIcon',
  component: TypographyWithIcon,
} as ComponentMeta<typeof TypographyWithIcon>

const Template: ComponentStory<typeof TypographyWithIcon> = (args) => (
  <TypographyWithIcon {...args} />
)

export const TypoWithIcon = Template.bind({})
TypoWithIcon.args = {
  children: 'State Bank of India',
  src: icon,
  arrow: rightArrow,
}
