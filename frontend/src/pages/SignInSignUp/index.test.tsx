import { render, screen } from '@testing-library/react'
import SignInSignUpPage from './index'

describe('Testing SignInSignUp page', () => {
  test('testing', () => {
    render(<SignInSignUpPage />)
    const testingSignInPage = screen.getByTestId('signIn-page')
    expect(testingSignInPage).toBeDefined()
  })
})
