import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DateProvider } from './components/Context/DateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DateProvider>

    <App />
    </DateProvider>
  </StrictMode>,
)
