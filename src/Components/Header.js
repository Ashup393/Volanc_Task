import React from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <div>
      <div className='navbar'>
    <div className='navbarlinkdiv'>

        <Link to ='/'   className="navbarlink" underline="hover" color="inherit">
         HOME.
       </Link>
       <Link to ='/Portfolio' className="navbarlink" underline="hover" color="inherit" >
         PORTFOLIO.
       </Link>
       <Link to ='/WhatIDo' className="navbarlink" underline="hover" color="inherit">
         WHAT I DO.
       </Link>
       <Link to='/Contact' className="navbarlink" underline="hover" color="inherit">
         CONTACT ME.
       </Link> 
       </div>
    </div>
    
    {/* <div className='Content'>
      <h1 id='hello'>Hello</h1>
      <text id='intro'>My name is Rafi.I am a Graphic Designer,and<br/>
      this is my only space to showcase my works.</text><br/>
      <button id='btnworks'>SEE MY WORKS <ForwardIcon className='arraw'/></button>
    </div> */}
    </div>
  )
}

export default Header


