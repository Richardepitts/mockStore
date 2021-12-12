import React, { useState, useEffect } from 'react'
import './ProductTile.css';
import Modal from "react-modal";
import axios from 'axios';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root"); 
const ProductTile = ({categoryName}) => {
    const [ product, setProduct ] = useState('Product Name');

    useEffect(() => {
        console.log(`hey the imgSrc is:`)
        console.log(`hey the imgSrc is:`)
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