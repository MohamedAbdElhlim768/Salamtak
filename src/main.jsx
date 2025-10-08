import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './Components/Nav/Nav.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
)
