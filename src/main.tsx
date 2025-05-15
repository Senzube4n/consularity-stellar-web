
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wrap the app in StrictMode for development best practices
createRoot(document.getElementById("root")!).render(
  <App />
);
