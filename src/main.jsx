import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'

import { BrowserRouter as Router } from 'react-router-dom'
import ErrorSuspense from './components/ErrorSuspense'
import { AppContext } from './store/app-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorSuspense>
      <AppContext>
        <Router>
          <App />
        </Router>
      </AppContext>
    </ErrorSuspense>
  </React.StrictMode>,
)
