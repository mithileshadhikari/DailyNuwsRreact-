import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Link} from "react-router-dom";


export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">DailyNuws</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
    <form className="d-flex me-2" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
  </div>
</nav>

<nav className="navbar-justify-content-center">
  <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link text-dark h6" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark h6" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark h6" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark h6" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark h6" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark h6" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark h6" to="/technology">technology</Link>
        </li>
      </ul>
    </header>
  </div>
  </nav>


      </div>
    )
  }
}

export default Navbar
