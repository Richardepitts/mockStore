import React, { useState, useEffect } from 'react'
/* eslint-disable */ 
import './ProductTile.css';
import Modal from "react-modal";
import axios from 'axios';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root"); 
const ProductTile = ({imgSrc, categoryName}) => {
    const prefix = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/';
    const [ product, setProduct ] = useState('Product Name');

    useEffect(() => {
        console.log(imgSrc);
    }, [])

    
    return (
        <div className='productTileParent'>
            <div className='productTileContainer'>
                <div className='productTile'>
                    <div className='productTileButton'>
                        <img className='productTileImg' src={prefix + imgSrc}/>
                    </div>
                    <div className='productTile'></div>
                    {/* <Link className='productTileLink' to='./Product'>{categoryName}</Link> */}  
                </div>
            </div>
        </div>
    )
}

export default ProductTile;