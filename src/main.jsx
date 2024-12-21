import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import RecepiContext from "./contexts/RecepiContext.jsx";
import {Provider} from "react-redux"
import { store } from "./store/store.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
     <RecepiContext>
      <App />
      <ToastContainer />
     </RecepiContext> 
     </Provider>
  </BrowserRouter>
)
