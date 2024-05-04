// import React from 'react'
import Logo from '../Logo'
import './navBar.css'
import { Link } from 'react-router-dom'

function index() {
  return (
    <nav>
        <div className="container">
            <Logo text='FlexBox CSS'/>
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about"> About</Link></li>
                <li><Link to="/contact"> Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default index
