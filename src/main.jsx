import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {SystemContextProvider} from "./context/SystemContextApi.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <SystemContextProvider>
     <App />
   </SystemContextProvider>
  </StrictMode>,
)
