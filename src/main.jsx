import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/assets/css/reset.css'
import '../src/assets/css/main.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "../Router.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
