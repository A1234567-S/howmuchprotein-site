import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import EggsPage from './EggsPage'
import './index.css'

// In main.jsx
import { lazy, Suspense } from 'react'

const EggsPage = lazy(() => import('./EggsPage'))

// Then wrap routes:
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/foods/eggs" element={<EggsPage />} />
  </Routes>
</Suspense>

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
