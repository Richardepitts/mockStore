/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from "react-modal";
import axios from 'axios';
import { ConsoleWriter } from 'istanbul-lib-report';

Modal.setAppElement("#root"); 
const Login = () => {

    const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0() 

    const [ anonymousCartData, setAnonymousCartData ] = useState({})
    const [ selectedCartData, setSelectedCartData ] = useState({})
    const [ cartSpecificData, setCartSpecifidData ] = useState({})
    const [ cartID, setCartID ] = useState(`00010003`)
    const [ allCarts, setAllCarts ] = useState( [1, 2, 3, 4] )
    const [ cartCreationModalIsOpen, setCartCreationModalIsOpen ] = useState(false)
    const [ cartSelectedModalIsOpen, setCartSelectedModalIsOpen ] = useState(false)
    const [ productCategories, setProductCategories ] = useState(['This', 'Will', 'Become', 'Categories'])
    const [ productSelection, setProductSelection ] = useState([''])
    let address = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com';
    let siteUid = 'powertools';
    let usertype = 'anil.gupta@rustic-hw.com';
    let userToken = 'Nocbk80MUZBPZ7Bcjqjld0hoqLQ';

    const makeModalDisappear = () => {
    }

    return (
        <div className='loginParent'>
            <h1>The Login Page</h1>
            { console.log(isAuthenticated) }
            <ul>
                    <button className='actionButton' onClick={loginWithPopup} >Modal Login</button>
                    <button className='actionButton' onClick={loginWithRedirect} >Redirect Login</button>
                    <button className='actionButton' onClick={logout} >Logout</button>
            </ul>
        </div>
        
    )
}

export default Login;

