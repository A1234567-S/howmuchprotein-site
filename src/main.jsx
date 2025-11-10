import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import EggsPage from './EggsPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/foods/eggs" element={<EggsPage />} />
        {/* Add more food routes here later */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
