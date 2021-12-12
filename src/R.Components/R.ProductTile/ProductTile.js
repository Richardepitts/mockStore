import React, { useState, useEffect } from 'react'
/* eslint-disable */ 
import './ProductTile.css';
import Modal from "react-modal";
import axios from 'axios';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root"); 
const ProductTile = ({imgSrc, categoryName}) => {
    const [ product, setProduct ] = useState('Product Name');

    useEffect(() => {
    }, [])

    
    return (
        <div className='productTileParent'>
            <div className='productTileContainer'>
                <div className='productTile'>
                    <button className='productTileButton'>
                        <Link className='productTileLink' to='./Product'>{categoryName}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductTile;