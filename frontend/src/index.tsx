import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(
  <Auth0Provider
    domain={'dev-ie311r785z2iltjl.us.auth0.com'}
    clientId={'N0Z7ejQXSeppvoRs4vK9QLMxlS8YU8Yp'}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
)
