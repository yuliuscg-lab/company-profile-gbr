import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import AuthProvider from './context/AuthContext.tsx'
import { initBackendless } from './config/backendless.config.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. Buat instance query client
const queryClient = new QueryClient();
initBackendless();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
        <AuthProvider>
          <App /> 
        </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
