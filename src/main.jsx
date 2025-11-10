import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import EggsPage from './EggsPage'
import ChickenBreastPage from './ChickenBreastPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/foods/eggs" element={<EggsPage />} />
        <Route path="/foods/chicken-breast" element={<ChickenBreastPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
