import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">AlkeFlix</p>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/list'>List</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/contact'>Contact</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header