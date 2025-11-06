import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import {ListadoApp} from './listadoApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListadoApp />
  </StrictMode>,
)
