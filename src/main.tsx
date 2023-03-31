import { createRoot } from 'react-dom/client'

import { App } from './app/App'
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <App />
  </StoreProvider>
)
