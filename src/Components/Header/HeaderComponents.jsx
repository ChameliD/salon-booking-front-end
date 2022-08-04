import React, { Component } from 'react'
import './HeaderComponents.css'

import logo from './logo.png'; // Tell webpack this JS file uses this image

class HeaderComponents extends Component {
  
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <img className="left" src={logo} alt='logo for the header'/>
            <div><a href='/'>Salon</a></div>
            <div><div><a href='/booking'>Book now</a></div></div>
          </nav>
        </header>
      </div>
    )
  }
}
export default HeaderComponents