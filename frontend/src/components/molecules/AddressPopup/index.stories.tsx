import { ComponentStory } from '@storybook/react'
import theme from '../../../theme/theme'
import AddressPopupComponent from './index'

export default {
  title: 'Molecules/AddressPopup',
  component: AddressPopupComponent,
}

const Template: ComponentStory<typeof AddressPopupComponent> = (args) => (
  <AddressPopupComponent {...args} />
)

export const AddressPopDetails = Template.bind({})
AddressPopDetails.args = {
  isOpen: true,
  title: 'Add trading address',
  label: 'Trading address 2',
  value:
    '3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003',
  buttonLabel: 'Add',
  textcolor: theme.palette.info.contrastText,
}
