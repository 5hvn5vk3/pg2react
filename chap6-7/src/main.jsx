import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { AdminFlagProvider } from './compnents/providers/AdminFlagProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminFlagProvider><App /></AdminFlagProvider>
  </StrictMode>,
)
