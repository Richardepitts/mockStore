import React, { useState, useEffect } from 'react'
/* eslint-disable */ 
import './ProductTile.css';
import Modal from "react-modal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AddToCartModal } from '../R.AddToCartModal/AddToCartModal'

Modal.setAppElement("#root"); 
const ProductTile = ({ code, imgSrc, name, price}) => {
    const prefix = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/';
    const [ product, setProduct ] = useState('Product Name');
    const [ addToCartModalIsOpen, setAddToCartModalIsOpen ] = useState(false);

    
    useEffect(() => { 

    }, [])

    const addToCart = () => {
        console.log(`add to cart called ${name} ${code} ${price}`)
        setAddToCartModalIsOpen(true)
    }
 
    
    return (
    <React.Fragment>
        <AddToCartModal codeForModal={code} priceForModal={price} nameForModal={name} imgSrcForModal={imgSrc} setAddToCartModalIsOpen={setAddToCartModalIsOpen} addToCartModalIsOpen={addToCartModalIsOpen}></AddToCartModal>
        {/* <Modal
            id="addToCartModal"
            isOpen={addToCartModalIsOpen}
            style={{
            overlay: {
                backgroundColor: "transparent",
                zIndex: 99999
            },
            content: {
                color: "white",
                borderRadius: "23px",
                left: "21%",
                top: "21vh",
                width: "776px",
                height: "280px",
                overflowY: "hidden",
                overflowX: "hidden",
                backgroundColor: 'rgb(237, 237, 237)!important',
                boxShadow: "rgba(17, 17, 26, 0.06) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            }}} ></Modal> */}
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
                    
                <div className='productTileDialogueParent productTileDialogueName'><div className='productTileDialogue'><strong>Product Name:</strong> &nbsp;{name}</div></div>
                <div className='productTileDialogueParent productTileDialogueCode'><div className='productTileDialogue'><strong>Product Code:</strong> &nbsp;{code}</div></div>
                <div className='productTileDialogueParent productTileDialoguePrice'><div className='productTileDialogue'><strong>Product Price:</strong> &nbsp;{price}</div></div>

                </div>


                </div>
                <div className='productTitleButtonsContainer'>
                    <div className='productTitleButtonsSubContainer'>
                        <div className='productTitleToggleContainer'><button id='productTitleToggle' className='productTitleHamburger'></button></div>
                        <button onClick={()=> {addToCart(name, code, price)}} className='productTitleAddToCart'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default ProductTile;