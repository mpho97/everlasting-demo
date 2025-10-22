import React, {useState} from 'react';
import Logo from '../assets/images/logo.png';
import Navbar from './Navbar';
const Header = () => {
 
  return (
     <header id="header" className="header">
         <a href="/">
        <div className="logo">
          <img src={Logo} />
        </div>
        </a>
        <Navbar />
        
      </header>     
  )
}

export default Header