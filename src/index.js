import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './containers/Home'
import { GlobalStyle } from './globalStyles.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />
  </React.StrictMode>
)
