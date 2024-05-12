import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import RecepiContext from "./contexts/RecepiContext.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <RecepiContext>
      <App />
      <ToastContainer />
     </RecepiContext> 
  </BrowserRouter>,
)
