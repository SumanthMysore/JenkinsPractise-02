import * as React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import DropDown from './index'
import {
  ACCOUNT_OPTION_PLACEHOLDER,
  COUNTRYREGISTRATION,
  PURPOSEOFPOCKETPAY,
  SELECTACCOUNTOPTION,
} from '../../../utils/constants'

describe('Should render Dropdown text', () => {
  test('renders the Dropdown text', () => {
    render(
      <DropDown
        placeholder="Select your country"
        data={COUNTRYREGISTRATION}
        label="Country of registration"
        currencyData={[]}
        isCurrency={false}
        isLabelText={true}
      />
    )
    const dropdown = screen.getByTestId('dropdown-text')
    expect(dropdown).toBeInTheDocument()
    const test = screen.getByTestId('dropdown-id')
    const input = within(test).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'A' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })
  })
})

describe('Should render Dropdown icon', () => {
  test('renders the Dropdown icon', () => {
    render(
      <DropDown
        placeholder="Select your country"
        data={[]}
        label="Select your country"
        currencyData={COUNTRYREGISTRATION}
        isCurrency={false}
        isLabelText={false}
        handleValue={() => {}}
      />
    )
    const dropdown = screen.getByTestId('dropdown-icon')
    expect(dropdown).toBeInTheDocument()
    const data = screen.getByTestId('click-data')
    fireEvent.click(data)
    const menuItem = screen.getAllByRole('menuitem')[1]
    fireEvent.click(menuItem)
  })
})

describe('Should render Dropdown currency icon', () => {
  test('renders the Dropdown currency icon', () => {
    render(
      <DropDown
        placeholder="Select currency"
        data={[]}
        label="Select currency"
        currencyData={COUNTRYREGISTRATION}
        isCurrency={true}
        defaultValue={0}
        isLabelText={false}
      />
    )
    const dropdown = screen.getByTestId('dropdown-icon')
    expect(dropdown).toBeInTheDocument()
  })
})

describe('Should render Dropdown Data Purpose', () => {
  test('renders the Dropdown Data Purpose', () => {
    render(
      <DropDown
        placeholder="Select currency"
        data={PURPOSEOFPOCKETPAY}
        label="Select currency"
        currencyData={[]}
        isCurrency={false}
        isLabelText={true}
        isCard={false}
      />
    )
    const test = screen.getByTestId('dropdown-text')
    expect(test).toBeInTheDocument()
  })
})

describe('Should render Dropdown Data Card', () => {
  test('renders the Dropdown Data Card', () => {
    render(
      <DropDown
        placeholder={ACCOUNT_OPTION_PLACEHOLDER}
        data={SELECTACCOUNTOPTION}
        currencyData={[]}
        isCurrency={false}
        label={ACCOUNT_OPTION_PLACEHOLDER}
        isLabelText={true}
        isCard={true}
      />
    )
    const dropdown = screen.getByTestId('dropdown-text')
    expect(dropdown).toBeInTheDocument()
    const test = screen.getByTestId('dropdown-id')
    const input = within(test).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'R' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })
  })
})
