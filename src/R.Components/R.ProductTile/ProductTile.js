import React, { useState, useEffect } from 'react'
/* eslint-disable */ 
import './ProductTile.css';
import Modal from "react-modal";
import axios from 'axios';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root"); 
const ProductTile = ({ code, imgSrc, name, price}) => {
    const prefix = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/';
    const [ product, setProduct ] = useState('Product Name');

    useEffect(() => {
    }, [])

    
    return (
        <div className='productTileParent'>
            <div className='productTileSubParent'>
            <div className='productTileContainer'>
                <div className='productTile'>
                    <div className='productTileButton'>
                        <img className='productTileImg' src={prefix + imgSrc}/>
                    </div>
                    <div className='productTileContentsContainer'>
                        <div className='productTileContents'>

                        </div>
                    </div>
                    {/* <Link className='productTileLink' to='./Product'>{categoryName}</Link> */}  
                    </div>
                
                
                </div>
                <div className='productTileDialogueContainer'>
                <div className='productTileDialogueSubContainer'>
                    
                <div className='productTileDialogueParent productTileDialogueName'><div className='productTileDialogue'><strong>Product Name:</strong> {name}</div></div>
                <div className='productTileDialogueParent productTileDialogueCode'><div className='productTileDialogue'><strong>Product Code:</strong> {code}</div></div>
                <div className='productTileDialogueParent productTileDialoguePrice'><div className='productTileDialogue'><strong>Product Price:</strong> {price}</div></div>

                </div>


                </div>
                <div className='productTitleButtonsContainer'>
                    <div className='productTitleButtonsSubContainer'>
                        <button className='productTitleToggle productTitleHamburger'>Hey1</button>
                        <button className='productTitleToggle productTitleAddToCart'>hey2</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTile;