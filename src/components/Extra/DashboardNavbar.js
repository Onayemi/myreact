import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

const DashboardNavbar = () => {
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-light">
        <div className="container-lg">
          <Link className="navbar-brand" to="/dashboard">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">All Products</Link>
              </li>
              <li className="nav-item">
                <div className="btn btn-primary btn-sm" onClick={logout}>Logout</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default DashboardNavbar