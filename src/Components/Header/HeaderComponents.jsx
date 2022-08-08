import React, { Component } from 'react'
import './HeaderComponents.css'

import logo from './logo_full.png'; // Tell webpack this JS file uses this image


const HeaderComponents=()=> {
 
  
    return (
      <header>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
	
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <br/>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <div className='logo'>
          <li class="nav-item active">
          <img className='logoText'  src={logo} alt='logo for the header'/></li>
        </div>

          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Selling</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Shops</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/booking">Book</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 
  
 
</header>
    )
  
}
export default HeaderComponents