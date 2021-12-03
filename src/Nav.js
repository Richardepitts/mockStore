import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='mainNav'>
        <div className='ResideoLogo'></div>
        <ul className='nav-links'>
            <Link className='colorLink' style={{textDecoration: 'none'}} to='/Login'> 
                <li>
                    Login
                </li>
            </Link> 
            <Link className='colorLink' style={{textDecoration: 'none'}} to='/Products'> 
                <li>
                    Products
                </li>
            </Link> 
            <Link className='colorLink' style={{textDecoration: 'none'}} to='/Categories'> 
                <li>
                    Categories
                </li>
            </Link> 
            <Link className='colorLink' style={{textDecoration: 'none'}} to='/cart'> 
                <li>
                    Cart
                </li>
            </Link> 
        </ul>
    </nav>
  );
}

export default Nav;
