import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          💪 ProteinFinder
        </Link>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/foods" className="nav-link" onClick={() => setIsOpen(false)}>
              🥗 Browse Foods
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/foods/chicken-breast" className="nav-link" onClick={() => setIsOpen(false)}>
              Quick Links
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
