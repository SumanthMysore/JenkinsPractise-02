import { ThemeProvider } from '@mui/material/styles'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccountSelection from './pages/AccountSelection'
import ActivityTracking from './pages/ActivityTracking'
import BusinessSelection from './pages/BusinessSelectionPage'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import SignInSignUpPage from './pages/SignInSignUp'
import TransferAmount from './pages/TransferAmount'
import './styles.css'
import theme from './theme/theme'

export const App = () => {
  const { isLoading, isAuthenticated } = useAuth0()
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <ThemeProvider theme={theme}>
      {!isAuthenticated && (
        <Router>
          <Routes>
            <Route path="/" element={<SignInSignUpPage />} />
          </Routes>
        </Router>
      )}
      {isAuthenticated && (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignInSignUpPage />} />
            <Route path="/account" element={<AccountSelection />} />
            <Route path="/business" element={<BusinessSelection />} />
            <Route path="/activity" element={<ActivityTracking />} />
            <Route path="/transfer" element={<TransferAmount />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      )}
    </ThemeProvider>
  )
}
