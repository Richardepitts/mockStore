import React, { useState, useEffect } from 'react'
import './ProductTile.css';
import Modal from "react-modal";
import axios from 'axios';

Modal.setAppElement("#root"); 
const ProductTile = ({categoryName}) => {
    const [ product, setProduct ] = useState('Product Name');

    useEffect(() => {
    }, [])

    
    return (
        <div className='productTileParent'>
            <div className='productTileContainer'>
                <div className='productTitle'>
                    {categoryName}

                </div>
            </div>
        </div>
    )
}

export default ProductTile;