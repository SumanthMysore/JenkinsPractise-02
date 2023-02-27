import { ComponentStory } from '@storybook/react'
import ConfirmationPopupComponent from './index'
import Illustration from '../../../../public/assets/Images/Illustration.svg'
import EmailCopy from '../../../../public/assets/Images/Email_copy.svg'

export default {
  title: 'Molecules/ConfirmationPopup',
  component: ConfirmationPopupComponent,
}

const Template: ComponentStory<typeof ConfirmationPopupComponent> = (args) => (
  <ConfirmationPopupComponent {...args} />
)

export const ConfirmationPopupDetails = Template.bind({})
ConfirmationPopupDetails.args = {
  isOpen: true,
  title: 'Share tracking link',
  label: 'Share the link above, and they can securely track this transfer.',
  source: Illustration,
  alt: 'Illustration',
  source1: EmailCopy,
  alt1: 'EmailCopy',
}
