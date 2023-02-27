import { render, screen } from '@testing-library/react'
import ConfirmationPopupComponent from './index'

describe('Should render confirmation popup', () => {
  it('renders the confirmation popup', () => {
    render(
      <ConfirmationPopupComponent
        isOpen={true}
        title="Add trading address"
        label="Trading address 2"
        source={'Illustration'}
        alt={'Illustration'}
        source1={'EmailCopy'}
        alt1={'EmailCopy'}
      ></ConfirmationPopupComponent>
    )
    const text = screen.getByTestId('confirmationPopup')
    expect(text).toBeInTheDocument()
  })
})
