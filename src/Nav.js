import './App.css';
import React, { useState, useEffect } from 'react';
import FontIcon from './R.Assets/FontIcon.png';
import { Link } from 'react-router-dom';

function Nav() {

    const fontChange = () => {
        let colorLinks = document.querySelectorAll('colorLink');
        colorLinks.forEach(link => {
            if (link.classList.contains('orpheusFont')) {
                alert('1')
                link.classList.remove('orpheusFont')
                link.classList.add('defaultFont')
            } 
        })
    }

  return (
    <nav className='mainNav'>
        <div className='ResideoLogo'></div>
        <ul className='nav-links'>
            <Link className='colorLink orpheusFont' style={{textDecoration: 'none'}} to='/Shop'> 
                <li>
                    Shop
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
            <Link className='colorLink' style={{textDecoration: 'none'}} to='/Login'> 
                <li>
                    Login
                </li>
            </Link> 
        </ul>
        <div onClick={ () => {fontChange()}} className='NavFontIconContainer'>
            <img className='NavFontIcon' src={FontIcon} alt=''></img>
        </div>
    </nav>
  );
}

export default Nav;
