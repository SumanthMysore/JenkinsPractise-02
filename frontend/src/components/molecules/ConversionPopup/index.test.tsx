import { render, screen } from '@testing-library/react'
import ConversionPopupComponent from './index'

describe('Should render address popup', () => {
  it('renders the address popup', () => {
    render(
      <ConversionPopupComponent
        isOpen={true}
        title="Hi there"
        buttonLabel="Add"
      ></ConversionPopupComponent>
    )
    const text = screen.getByTestId('conversionPopup')
    expect(text).toBeInTheDocument()
  })
})
