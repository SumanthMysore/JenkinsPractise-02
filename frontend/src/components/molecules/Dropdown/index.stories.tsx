import { ComponentStory } from '@storybook/react'
import {
  COUNTRYREGISTRATION,
  PURPOSEOFPOCKETPAY,
  SELECTACCOUNTOPTION,
} from '../../../utils/constants'
import DropDown from './index'

export default {
  title: 'Molecules/DropDown',
  component: DropDown,
}

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
)

export const SelectCountry = Template.bind({})
SelectCountry.args = {
  placeholder: 'Select your country',
  data: COUNTRYREGISTRATION,
  label: 'Country of registration',
  currencyData: [],
  isCurrency: false,
  isLabelText: true,
}

export const CountryDropdownCountryIcon = Template.bind({})
CountryDropdownCountryIcon.args = {
  placeholder: 'Select country',
  data: [],
  label: 'Select country',
  currencyData: COUNTRYREGISTRATION,
  isCurrency: false,
  isLabelText: false,
}

export const CountryDropdownCurrencyIcon = Template.bind({})
CountryDropdownCurrencyIcon.args = {
  placeholder: 'Select currency',
  data: [],
  label: 'Select currency',
  currencyData: COUNTRYREGISTRATION,
  isCurrency: true,
  isLabelText: false,
}

export const SelectPurpose = Template.bind({})
SelectPurpose.args = {
  placeholder: "Tell us what you're using Pocketpay for",
  data: PURPOSEOFPOCKETPAY,
  label: "Tell us what you're using Pocketpay for",
  currencyData: [],
  isCurrency: false,
  isLabelText: true,
}

export const SelectPurposeValue = Template.bind({})
SelectPurposeValue.args = {
  placeholder: 'Select an option',
  data: SELECTACCOUNTOPTION,
  label: 'Select an option',
  currencyData: [],
  isCurrency: false,
  isLabelText: true,
  isCard:true
}
