import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/layout/App'
import './index.scss'
import "./firebase.js"

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)