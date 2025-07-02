import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { AuthProvider } from './context/authContext.tsx'
import { UserProvider } from './context/userContext.tsx'
import './index.css'

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