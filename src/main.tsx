
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ContextProvider } from './context/context.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
