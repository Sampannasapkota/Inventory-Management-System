import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/authContext.tsx'
import { UserProvider } from './context/userContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserProvider>
    </AuthProvider>
  </StrictMode>
)