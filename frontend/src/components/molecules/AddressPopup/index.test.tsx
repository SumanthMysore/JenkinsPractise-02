import { render, screen } from '@testing-library/react'
import AddressPopupComponent from './index'

describe('Should render address popup', () => {
  it('renders the address popup', () => {
    render(
      <AddressPopupComponent
        isOpen={true}
        title="Add trading address"
        label="Trading address 2"
        value="3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003"
        buttonLabel="Add"
        textcolor={'white'}
      ></AddressPopupComponent>
    )
    const text = screen.getByTestId('addressPopup')
    expect(text).toBeInTheDocument()
  })
})
