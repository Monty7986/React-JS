import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="#">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/anything">{props.About1}</Link> */}
          <a className="nav-link" href="#">{props.About1}</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
      {/* <form className="d-flex" role="search"> */}
        {/* <input className="-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* </form> */}
        <button className="btn btn-outline-warning" type="submit">Search</button>
        <div className= {`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`} >
        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}


Navbar.prototype = { 
                      title: PropTypes.string.isrequired,
                      About: PropTypes.string.isrequired }

Navbar.defaultProps = {
                        title: 'Enter Title Here',
                        About: 'Enter Text Here' }
