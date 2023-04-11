import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'

import { ErrorBoundary } from 'app/providers/ErrorProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
)
