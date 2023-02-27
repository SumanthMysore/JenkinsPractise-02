import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import DatePickerComponent from '.'
import { userEvent } from '@storybook/testing-library'

describe('Testing the DatePickerComponent', () => {
  test('DatePickerComponent element', () => {
    render(<DatePickerComponent label="Date of birth" />)
    const Date = screen.getByLabelText('Date of birth')
    expect(Date).toBeInTheDocument()
    fireEvent.change(Date)
    userEvent.click(Date)
    fireEvent.change(Date, {
      target: { value: '12-12-2012' },
    })
    fireEvent.change(Date, { target: { value: '' } })

    const CalendarIcon = screen.getByRole('img')
    userEvent.click(CalendarIcon)
  })
})
