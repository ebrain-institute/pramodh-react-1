// import React from 'react'
import './logo.css'

function index(props) {
  return (
    <div className="logo">
        <a href="index.html">
            {props.text}
        </a>
    </div>
  )
}

export default index
