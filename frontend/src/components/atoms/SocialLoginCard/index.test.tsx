import { render, screen } from '@testing-library/react'
import SocialLoginCardComponent from './index'
import google from '../../../../public/assets/Icons/google.svg'

test('Should render Social Login Card', () => {
  render(<SocialLoginCardComponent logo={google} name="Google" />)
  const element = screen.getByRole('img')
  expect(element).toBeInTheDocument()
})
