import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MythMakersWorkshop from './MythMakersWorkshop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MythMakersWorkshop />
  </StrictMode>,
)
