import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import '../styles/Nav.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
  <div className="container">
    <NavLink className="navbar-brand" to={'/'}>Social Media</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/create-profile'}>Create Profile</NavLink>
        </li>
        
        <Link to={'/login'}><button type="button" className="btn btn-primary" >Login</button></Link>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar