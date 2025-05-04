import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoPage from './pages/todo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoPage />
  </StrictMode>
)
