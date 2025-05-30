import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/Home'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
