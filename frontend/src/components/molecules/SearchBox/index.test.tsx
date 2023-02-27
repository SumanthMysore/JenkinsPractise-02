import { fireEvent, render, screen, within } from '@testing-library/react'
import SearchBoxComponent from './index'
import icon from '../../../../public/assets/Icons/search.svg'

describe('Should render search box', () => {
  it('renders the search box', () => {
    render(
      <SearchBoxComponent
        src={icon}
        alt="icon"
        placeholder="Select your business"
        footerLabel="Can’t find your business?"
        footerValue="Enter your details"
      />
    )
    const text = screen.getByTestId('searchBox')
    expect(text).toBeInTheDocument()

    const placeholderText = screen.getByPlaceholderText(/Select your business/i)
    expect(placeholderText).toBeInTheDocument()

    const searchIcon = screen.getByAltText('icon')
    expect(searchIcon).toBeDefined()
    const input = within(text).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    text.focus()

    fireEvent.change(input, { target: { value: 'Z' } })
    fireEvent.keyDown(text, { key: 'ArrowDown' })
    fireEvent.keyDown(text, { key: 'Enter' })
  })
})
